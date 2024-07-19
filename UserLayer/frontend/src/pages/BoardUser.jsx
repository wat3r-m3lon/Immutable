import React, {useEffect, useState} from "react";
import {Web3Storage} from 'web3.storage';
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import {useParams} from "react-router-dom";
import axios from "axios";
import PageIllustration from "../partials/PageIllustration";
import Modal from "../partials/Modal";
import usePageTitle from '../../src/hooks/usePageTitle';
import Footer from "../partials/Footer";
import {useAccount, useContractWrite, usePrepareContractWrite} from "wagmi";
import ImmutableNFT from "../services/contracts/ImmutableNFT.json";
import { create } from '@web3-storage/w3up-client';


axios.defaults.withCredentials = true;
function BoardUser () {
  // add title
  usePageTitle("User Dashboard");

  //const currentUser = AuthService.getCurrentUser()
  const [content, setContent] = useState("");

  const [user, setUser] = useState([]);
  
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [web3StorageAccount, setWeb3StorageAccount] = useState([]);
  const [resultData, setResultData] = useState([]);
  const [resultDataWithFiles, setResultDataWithFile] = useState([]);

  const {userId} = useParams();
  useEffect(() => {
    loadUser(userId);
  }, []);

  const loadUser = async (id) => {
    const result = await axios.get('http://localhost:8080/api/order/full/'+id);
    setWeb3StorageAccount(result.data.web3StorageAccount)
    setResultData(result.data.orders);
    setResultDataWithFile(result.data.coverPhotos);
  };

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  //const contract = useImmutableContract("", "");
  const contractImmutableABI = ImmutableNFT.abi;
  const contractImmutableAddress = ImmutableNFT.networks.filter(
    (network) => network.name === "sepolia"
  )[0].address;

  const [ipfsAddress, setIpfsAddress] = useState("");
  const [orderId, setOrderId] = useState("");
  //const [isMinting, setIsMinting] = useState(false);
  const [isMintingArray, setIsMintingArray] = useState([]);

  useEffect(() => {
    const initialIsMintingArray = resultData.map(() => false);
    setIsMintingArray(initialIsMintingArray);
  }, [resultData]);

  const {isConnected} = useAccount();
  const { config: mintConfig, error } = usePrepareContractWrite({
    address: contractImmutableAddress,
    abi: contractImmutableABI,
    functionName: "createNFT",
    args: [ipfsAddress],
  });


  const { write: mint } = useContractWrite({
    ...mintConfig,
    transactionName: "Mint",
    onSuccess(data) {
      alert("Mint Success! Tx at:" + data.hash);
      axios.post(
        `http://localhost:8080/api/nft/${userId}`,
        {
          metadataAddress: ipfsAddress,
          nftAddress: data.hash,
        }
      ).then(async (response) => {
        await axios.delete(`http://localhost:8080/api/order/${orderId}`);
        loadUser(userId);
      }).catch((error) => {
        console.log(error);
        // TODO: handle error of updating nft to db
      });
    },
    onError(error) {
      alert("Mint Error!", error);
    },
  });

  const handleMint = async (data, index) => {
    if (data.status === 'Verified') {
      if (!isConnected) {
        alert("Please connect your wallet!");
        return;
      }
      setIsMintingArray(prevState => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
      });

      setOrderId(data.id);

      // Web3.storage upload
      try {
        // Create a new client and provision a space
        const client = await create();
        const space = await client.createSpace('Meikai_Test');
        const myAccount = await client.login(web3StorageAccount);
        await myAccount.provision(space.did());
        await space.createRecovery(myAccount.did());
        await space.save();
        await client.setCurrentSpace(space.did());
        // Upload image to IPFS first
        const imageIpfsAddress = await uploadImage(resultDataWithFiles[index], data.coverPhoto);
        if (!imageIpfsAddress) {
          alert("Failed to upload image to IPFS");
          return;
        }
        data.imgIPFSAddress = imageIpfsAddress; // Add image IPFS address to metadata

        // Upload metadata to IPFS
        const file = new File([JSON.stringify(data)], "data.json", { type: 'application/json' });
        const cid = await client.uploadFile(file);
        const ipfsAddress = `${cid}`;
        console.log("Uploaded to IPFS with CID:", cid);
        setIpfsAddress(ipfsAddress);
        if (isConnected) {
          mint?.({
            args: [ipfsAddress],
          });
        }
      } catch (error) {
        console.error("Upload to Web3.storage failed:", error);
        alert("Upload to IPFS failed!");
      }
    } else if (data.status === 'pending'){
      alert("Sorry, your request has not been verified!");
    } else {
      alert("Sorry, your request has been refused!");
    }
  }

 async function base64ToFile(base64, filename, mimeType) {
    return fetch(`data:${mimeType};base64,${base64}`)
        .then((res) => res.blob())
        .then((blob) => new File([blob], filename, { type: mimeType }));
  }
  async function uploadImage(imageData, filename) {
    //TODO: Replace with new API
    try {
      const file = await base64ToFile(imageData, filename, "image/jpeg");

      const client = await create();
      const space = await client.createSpace('Meikai_Test');
      const myAccount = await client.login(web3StorageAccount);
      await myAccount.provision(space.did());
      await space.createRecovery(myAccount.did());
      await space.save();
      await client.setCurrentSpace(space.did());
      // Upload the file
      const cid = await client.uploadFile(file);
      console.log(cid);
      return `${cid}`;
    } catch (err) {
      console.log('Error uploading image:', err);
      return null;
    }
  }

  return (
      <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}
        {/*<Header />*/}

        {/*  Page content */}
        <main className="grow">

          {/*  Page illustration */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration/>
          </div>

          <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h1 className="h1">Request List</h1>
                </div>

                {/*//TODO to complete the table*/}
                {/* Form */}


                <button onClick={() => setShowModal(false)} style={{ display: !showModal ? 'none' : 'block' }}>
                  BACK
                </button> {showModal ? (
                  <Modal show={showModal} onClose={() => setShowModal(false)} data={resultData} onDelete={handleDelete} onVerify={handleVerify} onRefuse={handleRefuse}/>
              ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="py-4 ">
                      <table className="table w-full border shadow mx-auto">
                        <thead>
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        

                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>

                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {resultData.map((resultData, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap">{resultData.id}</td>
                        
                              <td className="px-6 py-4 whitespace-nowrap">{resultData.title}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{resultData.provider}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{resultData.description}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{resultData.price}</td>

                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center space-x-2">
                                  <button
                                      className="px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                                      onClick={() => handleMint(resultData, index)}
                                      disabled={isMintingArray[index]}>
                                    {
                                      isMintingArray[index] ? (
                                          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                    strokeWidth="4"/>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0
                                            5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                          </svg>
                                      ) : "Mint"
                                    }
                                  </button>

                                </div>
                              </td>
                            </tr>
                        ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
              )}



              </div>
            </div>
          </section>

        </main>

        <Footer/>

      </div>
  );
}

export default BoardUser;
