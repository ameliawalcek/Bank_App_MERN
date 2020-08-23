import React from 'react';
import { PieChart } from 'react-minimal-pie-chart'
import { categoryInfo } from '../data/data'
import { observer, inject } from 'mobx-react'

const Chart = inject("transaction")(observer((props) => {
    
    return (
        <div id='chart'>
            <PieChart
                data={categoryInfo.map(c => {
                    return { title: c.name, 'value': props.transaction.findCategorySum(c.name), color: c.color }
                })} lineWidth={20} radius={24} />
        </div>
    )

}))

export default Chart;