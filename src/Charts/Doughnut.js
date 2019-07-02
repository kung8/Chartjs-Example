import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'

class DoughnutExample extends Component {
    constructor() {
        super()
        this.state = {
            chart1Data: {
                labels: ['Jazz', 'Lakers', 'Blazers', 'Warriors', 'Thunder', 'Raptors'], //labels for graph
                datasets: [
                    {
                        data: [90, 97, 70, 112, 101, 119], //value
                        backgroundColor: [
                            'pink',
                            'lightblue',
                            'lightyellow',
                            '#ffa500',
                            'lightgreen',
                            'lavender'
                        ],
                        borderColor: [ //border colors for graph and legend
                            'red',
                            'blue',
                            'yellow',
                            'orange',
                            'green',
                            'purple'
                        ],
                        borderWidth: 3 //border for graph and legend 
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div style={{border:'5px black solid',width:'75%',marginBottom:10}}>
                <h3>Doughnut Example</h3>
                <Doughnut
                    data={this.state.chart1Data} //what data your mapping
                    options={{ maintainAspectRatio: false }}
                    options={{
                        legend: {
                            position: 'right', //[top,right,left,bottom] 
                            //display: false, //default to true if not defined 
                            labels: { //labels on legend
                                fontColor: "black",
                                fontSize: 12,
                                boxWidth: 12
                            }
                        },
                        title: {
                            display: true,
                            position: "right", //[top,right,left,bottom]
                            text: "NBA Teams",
                            fontSize: 36,
                            fontColor: "black",
                            fontStyle: "bold"
                        }
                    }}
                />
            </div>
        )
    }
}

export default DoughnutExample