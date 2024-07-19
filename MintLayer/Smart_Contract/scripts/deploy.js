async function main() {
  // if you changed the name of the contract, be sure to update this here!
  const MyContract = await hre.ethers.getContractFactory("ImmutableNFT");

  const nft = await MyContract.deploy();

  await nft.deployed();

  console.log("contract deployed to:", nft.address);
 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });