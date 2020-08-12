import React, { Component } from 'react';
//import '../style/JS_FILE'

class Transaction extends Component {

    removeTransaction = () => {
        this.props.removeTransaction(this.props.transaction._id)
    }

    render() {
        let transaction = this.props.transaction
        return (
            <div className='transaction' onClick={this.removeTransaction}>
                <i className="fas fa-minus-circle"></i>
                <div className='tran-vendor'>{transaction.vendor}</div>
                <div className='tran-category'>{transaction.category}</div>
                <div className='tran-amount'>$ {transaction.amount}.00</div>
            </div>
        )
    }
}

export default Transaction;