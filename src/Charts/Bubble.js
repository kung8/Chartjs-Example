import React, { Component } from 'react'
import { Bubble } from 'react-chartjs-2'

class BubbleExample extends Component {
    constructor() {
        super()
        this.state = {
            data:{
                labels:['Bubble Table'],
                datasets:[
                    {
                        label: 'McD', //Key Label
                        fill:true,
                        lineTension: 0.1,
                        backgroundColor: 'yellow',
                        borderColor: 'black',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5, 
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 20,
                        data: [{x:10,y:20,r:5}] //x-coordinate,y-coordinate, and radius
                      },
                      {
                        label: 'CFA', 
                        fill:true,
                        lineTension: 0.1,
                        backgroundColor: 'lightblue',
                        borderColor: 'black',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5, 
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 20,
                        data: [{x:25,y:25,r:10}] 
                      },
                      {
                        label: 'Costa Vida', 
                        fill:true,
                        lineTension: 0.1,
                        backgroundColor: 'lightgreen',
                        borderColor: 'black',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5, 
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 20,
                        data: [{x:15,y:10,r:4}]
                      }
                ]
            }
        }
    }

    render() {
        return (
            <div style={{ border: '5px black solid', width: '75%', marginBottom: 10 }}>
                <h3>Bubble Example</h3>
                <Bubble data={this.state.data}/>
            </div>
        )
    }

}

export default BubbleExample

//Don't know what some of the attributes in the datasets array 