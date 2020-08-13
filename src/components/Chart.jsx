import React, { Component } from 'react';
//import '../style/JS_FILE'
import { PieChart } from 'react-minimal-pie-chart'

class Chart extends Component {

    render() {
        return (
            <div>
                <div id='graph'>
                    <PieChart
                        data={[
                            { title: 'Health', value: this.props.findCategory('Health'), color: '#3bb273' },
                            { title: 'Fun', value: this.props.findCategory('Fun'), color: '#ee4266' },
                            { title: 'Family', value: this.props.findCategory('Family'), color: '#540d6e' },
                            { title: 'Shopping', value: this.props.findCategory('Shopping'), color: '#ec7d10' },
                            { title: 'Food', value: this.props.findCategory('Food'), color: '#4d9de0' },
                        ]} center={[50, 50]} lineWidth={15} radius={30} viewBoxSize={[100, 100]} />
                </div>
            </div>
        )
    }
}

export default Chart;