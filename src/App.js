import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import Landing from './components/Landing'
import Categories from './components/Categories';

const axios = require('axios')

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      expenseSum: [],
      incomeSum: [],
      bankSum: [],
      categories: []
    };
  }

  getData() {
    return axios.get("http://localhost:4200/transactions")
  }

  getSums() {
    return axios.get('http://localhost:4200/transactions/sums')
  }

  getCategories() {
    return axios.get(`http://localhost:4200/categories`)
  }

  async componentDidMount() {
    const data = await this.getData()
    const sums = await this.getSums()
    const categories = await this.getCategories()
    this.setState({
      data: data.data,
      expenseSum: sums.data[0].expenses,
      incomeSum: sums.data[0].income,
      bankSum: sums.data[0].balance,
      categories: categories.data
    })
  }

  addTransaction = async (amount, vendor, category, string) => {
    amount = string === 'deposit' ? amount : -amount
    if (this.state.bankSum + amount > 0) {
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
      <Router>
        <div id='main-container'>
          <div id='top-bar'>
            <div> 
              <div id='account-header'>Account Balance</div>
              <div id='account-sum'>${this.state.bankSum}.00</div>
            </div>
            <Link to='/transactions/operation'><i className="fas fa-plus"></i></Link>
          </div>
          <div>
            <Route exact path='/' render={() => <Landing categories={this.state.categories} expenseSum={this.state.expenseSum} incomeSum={this.state.incomeSum} />} />
            <Route exact path='/category/:category' render={({match}) => <Categories match={match} categories={this.state.categories}/>} />
            <Route exact path='/transactions/operation' render={() => <Operations addTransaction={this.addTransaction} />} />
            <Route exact path='/transactions' render={() => <Transactions removeTransaction={this.removeTransaction} data={this.state.data} />} />
          </div>
          <div id='bottom-bar'></div>
        </div>
      </Router>
    )
  }
}

export default App;