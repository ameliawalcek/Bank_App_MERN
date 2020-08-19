import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { categoryInfo } from '../data/data'

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: '',
            vendor: '',
            category: ''
        }
    }

    addTransaction = ({ target }) => {
        let { vendor, category, amount } = this.state
        amount = parseInt(amount)

        return this.props.addTransaction(amount, vendor, category, target.name)
    }

    handleInput = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    render() {
        return (
            <div className='operation-container'>
                <div className='input-container'>
                    <div className='new'>Enter new expense</div>
                    <input name="amount" onChange={this.handleInput} type="number" id="amount" placeholder='Amount' required />
                    <input name="vendor" onChange={this.handleInput} type="text" id="vendor" placeholder='Vendor' required />
                    <select name="category" id="category" onChange={this.handleInput} value={this.state.category}>
                        <option value='selectCategory'>Select Category</option>
                        <option value='Salary'>Salary</option>
                        {categoryInfo.map(c => <option value={c.name} onChange={this.handleInput} key={Math.random()}>{c.name}</option>)}
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