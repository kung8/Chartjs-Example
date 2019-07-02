import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'

class PieExample extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                labels: [ 
                    'Winter',
                    'Summer',
                    'Spring',
                    'Fall'
                ],
                datasets: [{
                    data: [50,300, 250, 100],
                    backgroundColor: [
                        'pink',
                        'lightblue',
                        'lightgreen',
                        'lavender'
                    ],
                    hoverBackgroundColor: [
                        'red',
                        'blue',
                        'green',
                        'purple'
                    ]
                }]
            }
        }
    }

    render() {
        return (
            <div style={{ border: '5px black solid', width: '75%', marginBottom: 10 }}>
                <h3>Pie Example</h3>
                <Pie data={this.state.data}/>
            </div>
        )
    }

}


export default PieExample



