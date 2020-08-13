import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import Chart from './Chart'
class Landing extends Component {
    constructor(){
        super()
        this.state={
            
        }
    }
    findCategory = (str) => {
        let categories = this.props.categories
        let category = categories.length && categories.find(c => c._id === str)
        return category.total
    }

    render() {
        return (
            <div>
                <div id='health'>
                    <div className='cat-title'>Health</div>
                    <div className='health-circle'>
                        <Link to='/category/health'> <i className="fas fa-leaf" style={{ color: '#3bb273' }}></i></Link>
                    </div>
                    {this.findCategory('Health')}
                </div>
                <div id='entertainment'>
                    <div className='cat-title'>Fun</div>
                    <div className='entertainment-circle'>
                        <Link to='/category/fun'><i className="fas fa-film" style={{ color: '#ee4266' }}></i></Link>
                    </div>
                    {this.findCategory('Fun')}
                </div>
                <div id='family'>
                    <div className='cat-title'>Family</div>
                    <div className='family-circle'>
                        <Link to='/category/family'><i className="far fa-heart" style={{ color: '#540d6e' }}></i></Link>
                    </div>
                    {this.findCategory('Family')}
                </div>
                <Chart findCategory={this.findCategory} />
                <div id='expenses'>
                    <div>Expenses</div>
                    <div>$ {this.props.expenseSum}</div>
                    <div>$ {this.props.incomeSum}</div>
                </div>
                <div id='shopping'>
                    <div className='cat-title'>Shopping</div>
                    <div className='shopping-circle'>
                        <Link to='/category/shopping'> <i className="fas fa-shopping-cart" style={{ color: '#ec7d10' }}></i></Link>
                    </div>
                    {this.findCategory('Shopping')}
                </div>
                <div id='food'>
                    <div className='cat-title'>Food</div>
                    <div className='food-circle'>
                        <Link to='/category/food'><i className="fas fa-utensils" style={{ color: '#4d9de0' }}></i></Link>
                    </div>
                    {this.findCategory('Food')}

                </div>
            </div>
        )
    }
}

export default Landing;