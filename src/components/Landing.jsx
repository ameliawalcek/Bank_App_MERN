import React from 'react';
import Chart from './Chart'
import SubLanding from './SubLanding'
import { categoryInfo } from '../data/data'

function Landing(props) {
    let { expenseSum, incomeSum, categories } = props

    const findCategorySum = (str) => {
        let category = categories.length && categories.find(c => c._id === str)
        return category ? category.total : []
    }

    return (
        <div id='category-container'>
            <div className='one'>
                {categoryInfo.map(c => <SubLanding categoryInfo={c} categorySum={findCategorySum} key={Math.random()}/>)}
            </div>
            <div className='two'>
                <Chart categorySum={findCategorySum} />
                <div id='expenses'>
                    <div>Expenses</div>
                    <div className='neg'>$ {expenseSum}</div>
                    <div className='pos'>$ {incomeSum}</div>
                </div>
            </div>
        </div>
    )

}

export default Landing;