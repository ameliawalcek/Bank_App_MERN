import React from 'react';
import Chart from './Chart'
import SubLanding from './SubLanding'

function Landing(props) {

    const findCategory = (str) => {
        let categories = props.categories
        let category = categories.length && categories.find(c => c._id === str)
        return category ? category.total : []
    }

    return (
        <div id='category-container'>
            <div className='one'>
                <SubLanding categoryInfo={props.categoryInfo[0]} findCategory={findCategory} />
            </div>
            <div className='two'>
                <SubLanding categoryInfo={props.categoryInfo[1]} findCategory={findCategory} />
                <Chart findCategory={findCategory} />
                <div id='expenses'>
                    <div>Expenses</div>
                    <div className='neg'>$ {props.expenseSum}</div>
                    <div className='pos'>$ {props.incomeSum}</div>
                </div>
                <SubLanding categoryInfo={props.categoryInfo[2]} findCategory={findCategory} />
            </div>

            <div className='three'>
                <SubLanding categoryInfo={props.categoryInfo[3]} findCategory={findCategory} />
                <SubLanding categoryInfo={props.categoryInfo[4]} findCategory={findCategory} />
            </div>
        </div>
    )

}

export default Landing;