const express = require('express')
const router = express.Router()
const Transaction = require('../model/Transaction')

router.get('/transactions', (req, res) => {
    Transaction
        .find({})
        .sort({ _id: -1 })
        .exec((e, transactions) => { res.send(transactions) })
})

router.get('/transactions/sums', (req, res) => {
    Transaction.aggregate([
        {
            $group: {
                _id: null,
                expenses: { $sum: { $cond: [{ '$lt': ['$amount', 0] }, "$amount", 0] } },
                income: { $sum: { $cond: [{ '$gt': ['$amount', 0] }, "$amount", 0] } },
                balance: { "$sum": "$amount" }
            }
        }]).exec((e, categories) => { res.send(categories) })
})

router.get('/categories', (req, res) => {
    Transaction.aggregate([{
        $group:
        {
            _id: "$category",
            entry: { $push: { amount: '$amount', vendor: '$vendor' } },
            'total': { $sum: "$amount" }
        }
    }]).exec((e, categories) => res.send(categories))
})

router.post('/transaction', (req, res) => {
    const newTransaction = new Transaction(req.body)
    newTransaction
        .save()
        .then(transaction => res.send(transaction))
})

router.delete('/transaction/:id', (req, res) => {
    const { id } = req.params
    Transaction
        .findByIdAndDelete(id)
        .exec(() => { res.end() })
})

module.exports = router