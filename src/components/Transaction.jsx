import React, { Component } from 'react';

class Transaction extends Component {

    removeTransaction = () => {
        this.props.removeTransaction(this.props.transaction._id)
    }



    render() {
        let transaction = this.props.transaction
        let div = this.props.div
        return (
            <div>
                <div className={`transaction-${div}`}>
                    <i className="fas fa-minus-circle" onClick={this.removeTransaction}></i>
                    <div className={`tran-category-${div}`}>{transaction.category}</div>
                    <div className={`tran-vendor-${div}`}>{transaction.vendor}</div>
                    <div className={`tran-amount-${div}`}>$ {transaction.amount}.00</div>
                </div>
            </div>
        )
    }
}

export default Transaction;