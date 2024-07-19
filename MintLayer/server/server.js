const express = require("express")
const database = require("./db")
const { Web3Storage } = require("web3.storage")
const { File } = require("web3.storage")
const cors = require("cors")
require("dotenv").config()

function getAccessToken() {
  return process.env.WEB3STORAGE_KEY
}
function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() })
}
const port = 3001
const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())

app.get("/api/metadata", (req, res) => {
  try {
    res.status(200).send(database.metadata)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

app.post("/api/mint", async (req, res) => {
  try {
    const client = makeStorageClient()
    const cid = await client.put([
      new File([Buffer.from(JSON.stringify(req.body))], req.body.id.toString()),
    ])
    res.status(200).send(cid)
  } catch (e) {
    res.status(500).send(e)
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
