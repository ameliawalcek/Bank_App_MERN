import React, { Component } from 'react';


class Transaction extends Component {

    removeTransaction = () => {
        this.props.removeTransaction(this.props.transaction._id)
    }

    render() {
        let transaction = this.props.transaction
        return (
            <div>
                {transaction.amount >= 0 ?
                    <div className='transaction-pos'>
                        <i className="fas fa-minus-circle" onClick={this.removeTransaction}></i>
                        <div className='tran-category-pos'>{transaction.category}</div>
                        <div className='tran-vendor-pos'>{transaction.vendor}</div>
                        <div className='tran-amount-pos'>$ {transaction.amount}.00</div>
                    </div> :
                    <div className='transaction-neg'>
                        <i className="fas fa-minus-circle" onClick={this.removeTransaction}></i>
                        <div className='tran-category-neg'>{transaction.category}</div>
                        <div className='tran-vendor-neg'>{transaction.vendor}</div>
                        <div className='tran-amount-neg'>$ {transaction.amount}.00</div>
                    </div>}
            </div>
        )
    }
}

export default Transaction;