import React, { Component } from 'react';
import { PieChart } from 'react-minimal-pie-chart'

class Chart extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                { title: 'Health', color: '#3bb273' },
                { title: 'Fun', color: '#ee4266' },
                { title: 'Family', color: '#540d6e' },
                { title: 'Shopping', color: '#ec7d10' },
                { title: 'Food', color: '#4d9de0' }
            ]
        };
    }

    render() {
        return (
            <div id='chart'>
                <PieChart
                    data={this.state.data.map(d => {
                        return { title: d.title, 'value': this.props.findCategory(d.title), color: d.color }
                    })} lineWidth={20} radius={24} />
            </div>
        )
    }
}

export default Chart;