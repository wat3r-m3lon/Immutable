import {useState, useEffect} from "react";
import axios from "axios";
import AuthService from "../services/auth.service";
import Footer from "../partials/Footer";

axios.defaults.withCredentials = true;

function NFTs() {
  const user = AuthService.getCurrentUser();
  const [nfts, setNfts] = useState([]);
  const [nftDetails, setNftDetails] = useState([]);
  // const [nft, setNft] = useState(false);
  
  async function loadNfts() {
    const result = await axios.get(`http://localhost:8080/api/nft/${user.id}`);
    setNfts(result.data);
  }

  useEffect(() => {
    loadNfts();
    
  }, []);

  async function loadNftDetails() {
    setNftDetails(
      await Promise.all(
        nfts.map(async (nft) => {
          const metadata = await axios.get(`https://${nft.metadataAddress}.ipfs.w3s.link`, {withCredentials: false});
          return {
            ...nft,
            metadata: metadata.data,
          };
        })
      )
    )};

  useEffect(() => {
    loadNftDetails();
  }, [nfts]);
  
  const [showDetail, setShowDetail] = useState(false);

  const handleChick = () => {
    setShowDetail(!showDetail);
  };
  //console.log(nfts);


  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-lg font-bold">Minted Badges</h3>
      {/* {(nfts.length>0)?<ul>
        {nftDetails.map((nftDetail) => (
          <li key={nftDetail.id}>
            <div className="flex flex-col justify-center items-center rounded-full shadow-sm mt-5 mx-auto">
              <div className="flex flex-row justify-center items-center">
                <svg viewBox="0 0 100 100" width="30" height="30" onClick={handleChick}>
                  <path d="M 10,50 L 50,10 L 90,50 L 50,90 Z" fill="blue" />
                </svg>
                <p className="mx-3">{nftDetail.id}:
                  <a href={`https://sepolia.etherscan.io/tx/${nftDetail.nftAddress}`} className="hover:text-green-500 py-2 px-4 rounded">{`${nftDetail.nftAddress.slice(0,6)}...${nftDetail.nftAddress.slice(-4)}`}</a>
                </p>
              </div>

              {showDetail &&
                <div className="bg-white border rounded p-2 shadow">
                  <ul>
                    {Object.keys(nftDetail.metadata).map((property, index) => (
                      <li key={index}>{property}: {nftDetail.metadata[property]}</li>
                    ))}
                  </ul>
                </div>
              }
            </div>
          </li>
        ))}
      </ul>:<a className="mt-4 text-lg" href="/order_request"> You Don't Have Any NFT Yet, Go to Get One! </a>} */}
    <ul>
        {nftDetails.map((nftDetail) => (
          <li key={nftDetail.id}>
            <div className="flex flex-col justify-center items-center rounded-full shadow-sm mt-5 mx-auto">
              <div className="flex flex-row justify-center items-center">
                <svg viewBox="0 0 100 100" width="30" height="30" onClick={handleChick}>
                  <path d="M 10,50 L 50,10 L 90,50 L 50,90 Z" fill="blue" />
                </svg>
                <p className="mx-3">{nftDetail.id}:
                  <a href={`https://sepolia.etherscan.io/tx/${nftDetail.nftAddress}`} className="hover:text-green-500 py-2 px-4 rounded">{`${nftDetail.nftAddress.slice(0,6)}...${nftDetail.nftAddress.slice(-4)}`}</a>
                </p>
              </div>

              {showDetail &&
                <div className="bg-white border rounded p-2 shadow">
                  <ul>
                    {Object.keys(nftDetail.metadata).map((property, index) => (
                      <li key={index}>{property}: {nftDetail.metadata[property]}</li>
                    ))}
                  </ul>
                </div>
              }
            </div>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default NFTs;