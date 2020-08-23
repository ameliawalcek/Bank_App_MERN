import React from 'react';
import Transaction from './Transaction';
import { observer, inject } from 'mobx-react'

const Transactions = inject("transaction")(observer((props) => {
    let { dataSum, data } = props.transaction
    
    const getTransactions = () => data.map(d => {
        let div = d.amount <= 0 ? 'neg' : 'pos'

        return <Transaction key={d._id} div={div} transactions={d} />
    })

    return (
        <div className='transactions-container'>
            <div className='sub-header'>SUMMARY</div>
            <div className='summary'>
                <div className='pos-sum'>${dataSum.income}.00</div>
                <div>|</div>
                <div className='neg-sum'>${dataSum.expenses}.00</div>
            </div>
            {getTransactions()}
        </div>
    )
}))

export default Transactions;