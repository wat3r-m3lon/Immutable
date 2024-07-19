import React from "react";
import Button from "./Button";
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useContractFunction, useEthers, Goerli } from '@usedapp/core'
import ImmutableNFT from '../abi/ImmutableNFT.json'
import {Web3Storage} from 'web3.storage'
import {File} from 'web3.storage'

function getAccessToken() {
  return process.env.REACT_APP_WEB3STORAGE_TOKEN
}

function makeStorageClient() {
  console.log(getAccessToken())
  return new Web3Storage({ token: getAccessToken() })
}

function MintList({ datas }) {
  // 0x5FbDB2315678afecb367f032d93F642f64180aa3 contract address
  const contractInterface = new utils.Interface(ImmutableNFT.abi)
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
  const contract = new Contract(contractAddress, contractInterface)
  const {state, send} = useContractFunction(contract, 'createNFT', { 
    transactionName: 'Create NFT'
  })
  //console.log(contract)
  const createNFT = async (ipfs_addr) => {
    const tx = await send(ipfs_addr)
    console.log(tx)
  }


  async function mint(data) {
    const formattedData = Object.fromEntries(
      Object.entries(data).filter(([key]) => key !== "state")
    )
    console.log(formattedData)
    try {
      const client = makeStorageClient()
      const cid = await client.put([
        new File([JSON.stringify(formattedData)], formattedData.id.toString()),
      ])
      const ipfs_addr = "ipfs://" + cid + "/" + formattedData.id
      console.log(ipfs_addr)
      createNFT(ipfs_addr)
    } catch (err) {
      console.log(err)
    }
  }

  const { account, chainId } = useEthers()
  if (!account) {
    return (
      <div>
        <p>mint list</p>
        <ul>
          {datas.map((data) => (
            <li key={data.id}>
              id: {data.id} {data.attributes[0].degree}
              <p>Connect to mint</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  else if (chainId !== Goerli.chainId) {
    return (
      <div>
        <p>mint list</p>
        <ul>
          {datas.map((data) => (
            <li key={data.id}>
              id: {data.id} {data.attributes[0].degree}
              <p>Switch to Goerli to mint</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return (
    <div>
      <p>mint list</p>
      <ul>
        {datas.map((data) => (
          <li key={data.id}>
            id: {data.id} {data.attributes[0].degree}
            <Button title="mint" onClick={() => mint(data)}/>
            <p>Status: {state.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MintList;