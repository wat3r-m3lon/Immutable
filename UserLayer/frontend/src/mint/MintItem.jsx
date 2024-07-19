import { useState } from "react";
import Button from "./Button";
import ImmutableNFT from "./contracts/ImmutableNFT.json";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { upload } from "./utils/IPFS";


const contractImmutableABI = ImmutableNFT.abi;
const contractImmutableAddress = ImmutableNFT.networks.filter(
  (network) => network.name === "goerli"
)[0].address;


function MintItem({ metadata }) {
  const [ipfs, setIpfs] = useState("");
  const [isMinted, setIsMinted] = useState(false);

  
  function uploadToIPFS(data) {
    upload(data).then((res) => {
      console.log(res);
      setIpfs(res);
    });
  }

  const { config, error } = usePrepareContractWrite({
    address: contractImmutableAddress,
    abi: contractImmutableABI,
    functionName: "createNFT",
    args: [ipfs],
  });

  const { write } = useContractWrite({
    ...config,
    transactionName: "Mint",
    onSuccess(data) {
      alert("Mint Success! Tx at:" + data.hash);
      console.log(data);
      setIsMinted(true);
    },
    onError(error) {
      alert("Mint Error!", error);
    },
  });

  return (
    <li key={metadata.id}>
      <a href="#">
        id: {metadata.id} {metadata.attributes[0].degree}
      </a>
      {ipfs === "" ? (
        <Button
          title="upload"
          onClick={() => {
            uploadToIPFS(metadata);
          }}
        />
      ) : (
        <>
          <p>{ipfs}</p>
          <Button
            title="mint"
            disabled={isMinted}
            onClick={() => {
              write?.({
                args: [ipfs],
              });
            }}
          />
        </>
      )}
    </li>
  );
}

export default MintItem;
