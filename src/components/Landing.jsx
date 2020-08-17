import React from 'react';
import { Link } from 'react-router-dom'
import Chart from './Chart'

function Landing(props) {

    const findCategory = (str) => {
        let categories = props.categories
        let category = categories.length && categories.find(c => c._id === str)
        return category.total
    }

    return (
        <div id='category-container'>
            <div className='one'>
                <div id='food'><div className='cat-title'>Food</div>
                    <Link to='/category/food'><i className="fas fa-utensils fa-2x" style={{ color: '#4d9de0' }}></i></Link>
                    <div className='food'>
                        {`$ ${findCategory('Food')}.00`}
                    </div></div></div>

            <div className='two'>
                <div id='fun'><div className='cat-title'>Fun</div>
                    <Link to='/category/fun'><i className="fas fa-film fa-2x" style={{ color: '#ee4266' }}></i></Link>
                    <div className='fun'>
                        {`$ ${findCategory('Fun')}.00`}
                    </div>
                </div>
                <Chart findCategory={findCategory} />
                <div id='expenses'>
                    <div>Expenses</div>
                    <div className='neg'>$ {props.expenseSum}</div>
                    <div className='pos'>$ {props.incomeSum}</div>
                </div>
                <div id='family'><div className='cat-title'>Family</div>
                    <Link to='/category/family'><i className="far fa-heart fa-2x" style={{ color: '#540d6e' }}></i></Link>
                    <div className='family'>
                        {`$ ${findCategory('Family')}.00`}
                    </div>
                </div>
            </div>

            <div className='three'>
                <div id='shopping'><div className='cat-title'>Shopping</div>
                    <Link to='/category/shopping'> <i className="fas fa-shopping-cart fa-2x" style={{ color: '#ec7d10' }}></i></Link>
                    <div className='shopping'>
                        {`$ ${findCategory('Shopping')}.00`}
                    </div>
                </div>
                <div id='health'><div className='cat-title'>Health</div>
                    <Link to='/category/health'> <i className="fas fa-leaf fa-2x" style={{ color: '#3bb273' }}></i></Link>
                    <div className='health'>
                        {`$ ${findCategory('Health')}.00`}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Landing;