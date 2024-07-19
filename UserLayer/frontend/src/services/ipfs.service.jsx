
import { Web3Storage } from "web3.storage";
import { File } from "web3.storage";
import { getFilesFromPath } from 'web3.storage';


function getAccessToken() {
  return import.meta.env.VITE_WEB3STORAGE_TOKEN;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

// TODO: upload image error
async function uploadImage(imageName) {
  const path = `../../../userInfo/coverPhoto/${imageName}`;
  const files = await getFilesFromPath(path);
  console.log(files);
  try {
    const client = makeStorageClient();
    const cid = await client.put(
      files,
    );
    const ipfs_addr = `ipfs://${cid}/${files[0].name}`;
    return ipfs_addr;
  } catch (err) {
    console.log(err);
    return "error";
  }
}

async function upload(metadata) {
  const formattedData = Object.fromEntries(
    Object.entries(metadata).filter(([key]) => key !== "coverPhoto")
  );
  // TODO upload cover photo
  formattedData["imgIPFSAddress"] = await uploadImage(metadata.coverPhoto);
  //console.log(formattedData);
  try {
    const client = makeStorageClient();
    const cid = await client.put([
      new File([JSON.stringify(formattedData)], formattedData.id.toString()),
    ]);
    const ipfs_addr = `${cid}/${formattedData.id}`;
    return ipfs_addr;
  } catch (err) {
    console.log(err);
    return "error";
  }
}

const ipfsService = {
  upload,
};

export default ipfsService;


