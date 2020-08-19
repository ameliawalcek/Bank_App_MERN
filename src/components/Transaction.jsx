import React from 'react';

function Transaction(props) {
    let { transaction, div } = props

    const removeTransaction = () => {
        props.removeTransaction(transaction._id)
    }

    return (
        <div className={`transaction-${div}`}>
            <i className="fas fa-minus-circle" onClick={removeTransaction}></i>
            <div className={`tran-category-${div}`}>{transaction.category}</div>
            <div className={`tran-vendor-${div}`}>{transaction.vendor}</div>
            <div className={`tran-amount-${div}`}>$ {transaction.amount}.00</div>
        </div>
    )
}

export default Transaction;