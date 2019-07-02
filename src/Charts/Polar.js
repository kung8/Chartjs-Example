import React, { Component } from 'react'
import { Polar } from 'react-chartjs-2'

class PolarExample extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                datasets: [{
                    data: [22,13,30,20,10], //values
                    backgroundColor:['pink','lavender','lightblue','lightgreen','yellow'],
                    label:'Favorite Colors' //label for the chart ??? Not sure why it isn't showing
                }],
                labels:['Red','Purple','Blue','Green','Yellow'] //labels for the values
            }
        }
    }

    render() {
        return (
            <div style={{ border: '5px black solid', width: '75%', marginBottom: 10 }}>
                <h3>Polar Example</h3>
                <Polar data={this.state.data}/>
            </div>
        )
    }

}

export default PolarExample