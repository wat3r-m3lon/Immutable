import { Web3Storage } from "web3.storage";
import { File } from "web3.storage";

function getAccessToken() {
  return import.meta.env.VITE_WEB3STORAGE_TOKEN;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

async function upload(data) {
  const formattedData = Object.fromEntries(
    Object.entries(data).filter(([key]) => key !== "state")
  );
  console.log(formattedData);
  try {
    const client = makeStorageClient();
    const cid = await client.put([
      new File([JSON.stringify(formattedData)], formattedData.id.toString()),
    ]);
    const ipfs_addr = "ipfs://" + cid + "/" + formattedData.id;
    console.log(ipfs_addr);
    return ipfs_addr;
  } catch (err) {
    console.log(err);
    return "error";
  }
}

export { upload };
