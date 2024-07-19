import React from "react";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import ImmutableNFT from "./contracts/ImmutableNFT.json";
import Button from "./Button";

const contractImmutableABI = ImmutableNFT.abi;
const contractImmutableAddress = ImmutableNFT.networks.filter(
  (network) => network.name === "sepolia"
)[0].address;

function MintButton({ ipfs_address }) {
  const isConnected = useAccount();
  const [isMinted, setIsMinted] = useState(false);
  const { config, error } = usePrepareContractWrite({
    address: contractImmutableAddress,
    abi: contractImmutableABI,
    functionName: "createNFT",
    args: [ipfs_address],
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
    <Button
      title="mint"
      disabled={isConnected & !isMinted}
      onClick={() => {
        write?.({
          args: [ipfs_address],
        });
      }}
    />
  );
}

export default MintButton;
