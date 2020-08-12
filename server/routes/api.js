const express = require('express')
const router = express.Router()
const Transaction = require('../model/Transaction')

router.get('/transactions', (req, res) => {
    Transaction.find({}).exec()
        .then(transactions => { res.send(transactions) })
})

router.post('/transaction', (req, res) => {
    const { amount, vendor, category } = req.body
    const newTransaction = new Transaction({ amount, vendor, category })
    newTransaction.save().then(transaction => res.send(transaction))
})

router.delete('/transaction/:id', (req, res) => {
    const { id } = req.params
    Transaction.findByIdAndDelete(id)
        .exec(() => { res.end() })
})

module.exports = router