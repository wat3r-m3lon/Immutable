import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Button= () => {
  return (
    <div>
      <ConnectButton label="Connect Wallet" showBalance ={false}/>
    </div>
  );
};