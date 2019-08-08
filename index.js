const express = require('express')
const app = express()
const fs = require('fs').promises
const csv = require('csvtojson')

app.get('/', (req, res) => getFile(req.query.path, res))
app.listen(3000, () => console.log(`Running!`))

async function getFile (filePath, res) {
  try {
    if (filePath.indexOf('.csv') > -1) {
      res.send(await csv().fromFile(filePath))
    } else {
      res.send(await fs.readFile(filePath))
    }
  } catch (e) {
    res.send('File not found!')
  }
}
