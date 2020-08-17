const express = require('express')
const router = express.Router()
const Transaction = require('../model/Transaction')

router.get('/transactions', (req, res) => {
    Transaction.find({}).sort({_id: -1}).exec()
        .then(transactions => { res.send(transactions) })
})

router.get('/transactions/sums', (req, res) => {
    Transaction.aggregate([
        {
            $group: {
                _id: null,
                expenses: {$sum:{$cond:[{ '$lt': ['$amount', 0]}, "$amount", 0]}}, 
                income: {$sum:{$cond:[{ '$gt': ['$amount', 0]}, "$amount", 0]}},
                balance: { "$sum": "$amount" }
            }
        }]).exec().then(categories => { res.send(categories) })
})

router.get('/categories', (req, res) => {
    Transaction.aggregate([{
        $group:
        {
            _id: "$category",
            entry: { $push: { amount: '$amount', vendor: '$vendor' } },
            'total': { $sum: "$amount" }
        }
    }]).exec().then(categories => { res.send(categories) })
})

router.post('/transaction', (req, res) => {
    const { amount, vendor, category } = req.body
    const newTransaction = new Transaction({ amount, vendor, category })
    newTransaction.save().then(transaction => res.send(transaction))
})

router.delete('/transaction/:id', (req, res) => {
    const { id } = req.params
    Transaction.findByIdAndDelete(id).exec(() => { res.end() })
})

module.exports = router