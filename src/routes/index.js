const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  response.status(200).send({
    titulo: "Plataforma EqualiJobs",
    version: "1.0.0"
  })
})


module.exports = router 