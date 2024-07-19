// need to fix some bugs to use this service

import { useState} from "react";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import ImmutableNFT from "./contracts/ImmutableNFT.json";
import AuthService from "./auth.service";
import axios from "axios";

const NFT_API_URL = "http://localhost:8080/api/nft/";
const ORDER_API_URL = "http://localhost:8080/api/order/";

const contractImmutableABI = ImmutableNFT.abi;
const contractImmutableAddress = ImmutableNFT.networks.filter(
  (network) => network.name === "goerli"
)[0].address;

export default function useImmutableContract({ initialIpfsAddress, initialOrderId }) {
  const isConnected = useAccount();
  const [ipfsAddress, setIpfsAddress] = useState(initialIpfsAddress);
  const [orderId, setOrderId] = useState(initialOrderId);
  const user = AuthService.getCurrentUser();

  function updateIpfsAddress(newIpfsAddress) {
    setIpfsAddress(newIpfsAddress);
  }

  function updateOrderId(newOrderId) {
    setOrderId(newOrderId);
  }

  const { config, error } = usePrepareContractWrite({
    address: contractImmutableAddress,
    abi: contractImmutableABI,
    functionName: "createNFT",
    args: [ipfsAddress],
  });
  
  async function mint() {
    const { write } = useContractWrite({
      ...config,
      transactionName: "Mint",
      onSuccess(data) {
        alert("Mint Success! Tx at:" + data.hash);
        console.log(data);
        // TODO: update nft to db
        axios.put(`http://localhost:8080/api/nft/${user.id}`, {
          metadataAddress: ipfsAddress,
          nftAddress: data.hash,
        });

        // TODO: delete minted order in db
        axios.delete(`http://localhost:8080/api/order/${id}`);
      },
      onError(error) {
        alert("Mint Error!", error);
      },
    });
    if (isConnected) {
      write?.({
        args: [ipfsAddress],
      });
    } else {
      alert("Please connect your wallet!");
    }
  }

  return {
    mint,
    updateIpfsAddress,
    updateOrderId,
  }
};