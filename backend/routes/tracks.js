const express = require("express")

const router = express.Router()

const tracks = require("../data/tracks.json")

router.get("/", (req,res)=>{

res.json(tracks)

})

module.exports = router
