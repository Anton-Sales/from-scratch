const express = require('express')
const router = express.Router()

const ratsDB = require('../db/rats')

router.get('/', (req, res) => { // gets rats in json format
    ratsDB.getRats()
        .then(rats => {
            res.json(rats)
        })
})

router.post('/', (req, res) => {
    const rat = req.body
    // console.log({rat})
    ratsDB.addRat(rat)
    .then(id => {
        res.json(id[0])
    })
    res.json(rat)
})


module.exports = router