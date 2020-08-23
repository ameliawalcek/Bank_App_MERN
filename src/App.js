import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import Categories from './components/Categories';
import Landing from './components/Landing'
import { observer, inject } from 'mobx-react'

@inject('transaction')
@observer
class App extends Component {

  async componentDidMount() {
    await this.props.transaction.getCategories()
    await this.props.transaction.getData()
    await this.props.transaction.getSums()
  }

  render() {
    let { dataSum } = this.props.transaction
    return (
      <Router>
        <div id='main-container'>
          <div id='top-bar'><div>
            <Link to='/'><div id='account-header'>Account Balance</div></Link>
            <div id='account-sum'>${dataSum.balance}.00</div>
          </div>
            <div className='plus'>
              <Link to='/transactions/operation'><i className="fas fa-plus fa-lg" style={{ color: 'white' }}></i></Link></div>
          </div>
          <div>
            <Route exact path='/' render={() => <Landing />} />
            <Route exact path='/category/:category' render={({ match }) => <Categories match={match} />} />
            <Route exact path='/transactions' render={() => <Transactions />} />
            <Route exact path='/transactions/operation' render={() => <Operations />} />
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