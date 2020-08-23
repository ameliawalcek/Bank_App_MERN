import React from 'react';
import Chart from './Chart'
import SubLanding from './SubLanding'
import { categoryInfo } from '../data/data'
import { observer, inject } from 'mobx-react'

const Landing = inject("transaction")(observer((props) => {
    let { dataSum } = props.transaction
    
    return (
        <div id='category-container'>
            <div className='one'>
                {categoryInfo.map(c => <SubLanding categoryInfo={c} key={Math.random()} />)}
            </div>
            <div>
                <Chart />
                <div id='expenses'>
                    <div>Expenses</div>
                    <div className='neg'>$ {dataSum.expenses}</div>
                    <div className='pos'>$ {dataSum.income}</div>
                </div>
            </div>
        </div>
    )


}))

export default Landing;