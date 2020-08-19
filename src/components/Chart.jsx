import React from 'react';
import { PieChart } from 'react-minimal-pie-chart'
import { categoryInfo } from '../data/data'

function Chart(props) {

    return (
        <div id='chart'>
            <PieChart
                data={categoryInfo.map(d => {
                    return { title: d.name, 'value': props.categorySum(d.name), color: d.color }
                })} lineWidth={20} radius={24} />
        </div>
    )

}

export default Chart;