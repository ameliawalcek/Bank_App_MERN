import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
const axios = require('axios')

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        // { _id: 0, amount: 3200, vendor: "Elevation", category: "Salary" },
        // { _id: 1, amount: -7, vendor: "Runescape", category: "Entertainment" },
        // { _id: 3, amount: -98, vendor: "La Baguetterie", category: "Food" },
        // { _id: 2, amount: -20, vendor: "Subway", category: "Food" },
      ],
    };
  }

  async getData() {
    return axios.get("http://localhost:4200/transactions")
  }

  async componentDidMount() {
    const data = await this.getData()
    this.setState({ data: data.data })
  }

  calculateBalance = () => {
    let sum = this.state.data.reduce((sum, { amount }) => sum + amount, 0)
    return sum
  }

  addTransaction = async (amount, vendor, category, string) => {
    amount = string === 'deposit' ? amount : -amount
    if (this.calculateBalance() + amount > 0) {

      let transaction = { amount, vendor, category }
      let data = await axios.post('http://localhost:4200/transaction', transaction)
      data = this.state.data.concat(data.data)
      this.setState({ data })
    } else {
      alert('insufficient funds idiot!')
    }
  }

  removeTransaction = async (id) => {
    await axios.delete(`http://localhost:4200/transaction/${id}`)
    let data = [... this.state.data]
    let newData = data.filter(d => d._id !== id)
    this.setState({ data: newData })
  }

  render() {
    return (
      <div>
        <div>Bank balance: ${this.calculateBalance()}</div>
        <Operations addTransaction={this.addTransaction} />
        <Transactions removeTransaction={this.removeTransaction} data={this.state.data} />
      </div>
    )
  }
}

export default App;