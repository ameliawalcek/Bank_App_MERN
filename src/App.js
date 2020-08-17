import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import Landing from './components/Landing'
import Categories from './components/Categories';

const axios = require('axios')

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      expenseSum: [],
      incomeSum: [],
      bankSum: [],
      categories: [],
      categoryInfo: [
        {name: 'Food', icon: 'fas fa-utensils', color: '#4d9de0'},
        {name: 'Fun', icon: 'fas fa-film', color: '#ee4266'},
        {name: 'Family', icon: 'far fa-heart', color: '#540d6e'},
        {name: 'Shopping', icon: 'fas fa-shopping-cart', color: '#ec7d10'},
        {name: 'Health', icon: 'fas fa-leaf', color: '#3bb273'}
      ]
    }
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
    const categories = await this.getCategories()
    const data = await this.getData()
    const sums = await this.getSums()
    let sumData = sums.data[0]

    this.setState({
      categories: categories.data,
      data: data.data,
      expenseSum: sumData.expenses,
      incomeSum: sumData.income,
      bankSum: sumData.balance,
    })
  }

  async componentDidUpdate(_, prevState) {
    if (this.state.data.length !== prevState.data.length) {
      const sums = await this.getSums()
      let sumData = sums.data[0]
      this.setState({
        expenseSum: sumData.expenses,
        incomeSum: sumData.income,
        bankSum: sumData.balance,
      })
    }
  }

  addTransaction = async (amount, vendor, category, string) => {
    amount = string === 'income' ? amount : -amount

    if (this.state.bankSum + amount > 0) {
      let transaction = { amount, vendor, category }
      let newData = await axios.post('http://localhost:4200/transaction', transaction)
      let data = [...this.state.data]
      data.unshift(newData.data)
      this.setState({ data })
    } else {
      alert('insufficient funds')
    }
  }

  removeTransaction = async (id) => {
    await axios.delete(`http://localhost:4200/transaction/${id}`)
    let data = [...this.state.data]
    let newData = data.filter(d => d._id !== id)
    this.setState({ data: newData })
  }

  render() {
    return (
      <Router>
        <div id='main-container'>
          <div id='top-bar'><div>
            <Link to='/'><div id='account-header'>Account Balance</div></Link>
            <div id='account-sum'>${this.state.bankSum}.00</div>
          </div>
            <div className='plus'>
              <Link to='/transactions/operation'><i className="fas fa-plus fa-lg" style={{ color: 'white' }}></i></Link></div>
          </div>
          <div>
            <Route exact path='/' render={() => <Landing categories={this.state.categories} expenseSum={this.state.expenseSum} incomeSum={this.state.incomeSum}  categoryInfo={this.state.categoryInfo}/>} />
            <Route exact path='/category/:category' render={({ match }) => <Categories match={match} categories={this.state.categories}/>} />
            <Route exact path='/transactions' render={() => <Transactions removeTransaction={this.removeTransaction} data={this.state.data} expenseSum={this.state.expenseSum} incomeSum={this.state.incomeSum} />} />
            <Route exact path='/transactions/operation' render={() => <Operations addTransaction={this.addTransaction} />} />
          </div>
          <div id='bottom-bar'>
            <div id='bottom-bar-container'>
              <Link to='/'><i className="fas fa-chart-pie fa-lg" style={{ color: '#8c8c8c' }}></i></Link>
              <Link to='/transactions'><i className="far fa-credit-card fa-lg" style={{ color: '#8c8c8c' }}></i></Link>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;