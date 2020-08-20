import React from 'react';
import { PieChart } from 'react-minimal-pie-chart'
import { categoryInfo } from '../data/data'

function Chart(props) {

    return (
        <div id='chart'>
            <PieChart
                data={categoryInfo.map(c => {
                    return { title: c.name, 'value': props.categorySum(c.name), color: c.color }
                })} lineWidth={20} radius={24} />
        </div>
    )

}

export default Chart;