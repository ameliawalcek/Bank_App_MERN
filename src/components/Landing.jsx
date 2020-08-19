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
                <SubLanding categoryInfo={categoryInfo[0]} categorySum={findCategorySum} />
            </div>
            <div className='two'>
                <SubLanding categoryInfo={categoryInfo[1]} categorySum={findCategorySum} />
                <SubLanding categoryInfo={categoryInfo[2]} categorySum={findCategorySum} />
                <Chart categorySum={findCategorySum}/>
                <div id='expenses'>
                    <div>Expenses</div>
                    <div className='neg'>$ {expenseSum}</div>
                    <div className='pos'>$ {incomeSum}</div>
                </div>
            </div>
            <div className='three'>
                <SubLanding categoryInfo={categoryInfo[3]} categorySum={findCategorySum} />
                <SubLanding categoryInfo={categoryInfo[4]} categorySum={findCategorySum} />
            </div>
        </div>
    )

}

export default Landing;