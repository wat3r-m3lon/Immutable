require('dotenv').config();
const express = require('express');
const cors = require('cors')
const fs = require('fs');
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())

const { Web3Storage } = require('web3.storage');
const { File } = require('web3.storage');
const { getFilesFromPath } = require('web3.storage');



function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

function getAccessToken() {
  const token = process.env.WEB3STORAGE_TOKEN;
  return token;
}

// TODO: upload image error
async function uploadImage(imageName) {
  const path = `../userInfo/profilePhotos/${imageName}`;

  // Check if file exists
  if (!fs.existsSync(path)) {
    console.log(`File not found: ${path}`);
    return;
  }

  const files = await getFilesFromPath(path);
  console.log(files);

  try {
    const client = makeStorageClient();
    const cid = await client.put(files);
    const ipfsAddr = `ipfs://${cid}${files[0].name}`;
    return ipfsAddr;
  } catch (err) {
    console.log('Error uploading image:', err);
    return null;
  }
}


async function upload(metadata) {
  const formattedData = Object.fromEntries(
      Object.entries(metadata).filter(([key]) => key !== "coverPhoto")
  );
  // TODO upload cover photo
  formattedData["imgIPFSAddress"] = await uploadImage(metadata.coverPhoto);

  try {
    const client = makeStorageClient();
    const cid = await client.put([
      new File([JSON.stringify(formattedData)], formattedData.id.toString())
    ]);
    return `${cid}/${formattedData.id}`;
  } catch (err) {
    console.log('Error uploading metadata:', err);
    return null;
  }
}

// Create a new route for the `/api/ipfs/upload` endpoint
app.post('/api/ipfs/upload', async (req, res) => {
  const body = req.body;
  const ipfsAddr = await upload(body);

  if (ipfsAddr) {
    res.status(200).send({ ipfsAddr });
  } else {
    res.status(500).send({ error: "Upload failed" });
  }
});


// Start the server
const port = process.env.PORT || 8082;
app.listen(8082, () => {
  console.log(`Server is running on port ${port}`);
});
