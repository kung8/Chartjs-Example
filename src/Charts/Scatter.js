import React, { Component } from 'react'
import { Scatter } from 'react-chartjs-2'

class ScatterExample extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                labels: ['Scatter Chart'],
                datasets: [{
                    label: 'A',
                    fill: true,
                    backgroundColor: 'lightgreen', //legend
                    pointBorderColor: 'green', //point border
                    pointBackgroundColor: 'lightgreen',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    pointHitRadius: 10,
                    data: [
                        { x: 65, y: 75 },
                        { x: 59, y: 49 },
                        { x: 80, y: 90 },
                        { x: 81, y: 29 },
                        { x: 56, y: 36 },
                        { x: 55, y: 25 },
                        { x: 40, y: 18 },
                    ]
                },
                {
                    label: 'B',
                    fill: true,
                    backgroundColor: 'lightblue',
                    pointBorderColor: 'blue',
                    pointBackgroundColor: 'lightblue',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    pointHitRadius: 10,
                    data: [
                        { x: 75, y: 75 },
                        { x: 60, y: 49 },
                        { x: 99, y: 90 },
                        { x:79, y: 19 },
                        { x: 46, y: 36 },
                        { x: 49, y: 45 },
                        { x: 32, y: 48 },
                    ]
                }
                ]

            }
        }
    }

    render() {
        return (
            <div style={{ border: '5px black solid', width: '75%', marginBottom: 10 }}>
                <h3>Scatter Example</h3>
                <Scatter data={this.state.data} />
            </div>
        )
    }

}

export default ScatterExample