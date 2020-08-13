import React, { Component } from 'react';
//import '../style/JS_FILE'
import { Link, Redirect } from 'react-router-dom'

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: '',
            vendor: '',
            category: ''
        }
    }

    addTransaction = (e) => {
        let amount = parseInt(this.state.amount)
        let vendor = this.state.vendor
        let category = this.state.category

        if (e.target.name === 'deposit') {
            this.props.addTransaction(amount, vendor, category, 'deposit')
        } else {
            this.props.addTransaction(amount, vendor, category, 'withdraw')
        }
    }

    handleInput = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <input type="number" name="amount" id="amount" onChange={this.handleInput} placeholder='Amount' required />
                <input type="text" name="vendor" id="vendor" onChange={this.handleInput} placeholder='Vendor' required />
                <input type="text" name="category" id="category" onChange={this.handleInput} placeholder='Category' required />
                <br />
                <Link to='/'><button name='deposit' onClick={this.addTransaction}>Income</button></Link>
                <Link to='/'><button name='withdraw' onClick={this.addTransaction}>Expense</button></Link>
            </div>
        )
    }
}

export default Operations;