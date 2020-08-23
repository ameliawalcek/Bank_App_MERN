import React from 'react';
import { observer, inject } from 'mobx-react'

const Transaction = inject("transaction")(observer((props) => {
    let { transactions, div } = props

    const removeTransaction = () => {
        props.transaction.removeTransaction(transactions._id)
        props.transaction.getSums()
    }

    return (
        <div className={`transaction-${div}`}>
            <i className="fas fa-minus-circle" onClick={removeTransaction}></i>
            <div className={`tran-category-${div}`}>{transactions.category}</div>
            <div className={`tran-vendor-${div}`}>{transactions.vendor}</div>
            <div className={`tran-amount-${div}`}>$ {transactions.amount}.00</div>
        </div>
    )
}))

export default Transaction;