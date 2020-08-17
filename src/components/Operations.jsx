import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: '',
            vendor: '',
            category: '',
            categories: ['Select Category', 'Family', 'Salary', 'Fun', 'Health', 'Shopping']
        };
    }

    addTransaction = ({ target }) => {
        let amount = parseInt(this.state.amount)
        let vendor = this.state.vendor
        let category = this.state.category
        let str

        target.name === 'expense' ? str = 'expense' : str = 'income'

        return this.props.addTransaction(amount, vendor, category, str)
    }

    handleInput = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    render() {
        return (
            <div className='operation-container'>
                <div className='input-container'>
                    <div className='new'>Enter new expense</div>
                    <input type="number" name="amount" id="amount" onChange={this.handleInput} placeholder='Amount' required />
                    <input type="text" name="vendor" id="vendor" onChange={this.handleInput} placeholder='Vendor' required />
                    <select name="category" id="category" onChange={this.handleInput} value={this.state.category}>
                        {this.state.categories.map(c => <option value={c} onChange={this.handleInput} key={Math.random()}>{c}</option>)}
                    </select>
                </div>
                <div className='button-container'>
                    <Link to='/transactions'><button name='income' onClick={this.addTransaction}>Income</button></Link>
                    <Link to='/transactions'><button name='expense' onClick={this.addTransaction}>Expense</button></Link>
                </div>
            </div>
        )
    }
}

export default Operations;