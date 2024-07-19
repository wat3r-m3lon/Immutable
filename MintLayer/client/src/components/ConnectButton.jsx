import React from "react";
import Button from "./Button";
import { useEthers } from "@usedapp/core"

function ConnectButton() {
  const { account, deactivate, activateBrowserWallet } = useEthers()
  if (account) {
    return (
      <Button title="disconnect" onClick={() => deactivate()}/>
    )
  } else {
    return (
      <Button title="connect" onClick={() => activateBrowserWallet()}/>
    )
  }
}

export default ConnectButton;