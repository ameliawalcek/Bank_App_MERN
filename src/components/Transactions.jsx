import React from 'react';
import Transaction from './Transaction';

function Transactions(props) {

    const getTransactions = () => props.data.map(d => {
        let div
        d.amount <= 0 ? div = 'neg' : div = 'pos'

        return <Transaction key={d._id} div={div} transaction={d} removeTransaction={props.removeTransaction} />
    })
    
    return (
        <div className='transactions-container'>
            <div className='sub-header'>SUMMARY</div>
            <div className='summary'>
                <div className='pos-sum'>${props.incomeSum}.00</div><div>|</div>
                <div className='neg-sum'>${props.expenseSum}.00</div>
            </div>
            {getTransactions()}
        </div>
    )
}

export default Transactions;