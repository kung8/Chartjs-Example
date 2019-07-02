import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class LineExample extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Soda Sales', //Title of the line chart
                        fill: false, //Boolean for color fill of area beneath the line
                        lineTension: 0.1, 
                        backgroundColor: 'rgba(75,192,192,0.4)', //area beneath line color
                        borderColor: 'blue', //line color
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',//point border color
                        pointBackgroundColor: '#fff',//point background color
                        pointBorderWidth: 1,//point border itself
                        pointHoverRadius: 5,//point radius itself when hovered
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)', //background color when hovered (area around)
                        pointHoverBorderColor: 'rgba(220,220,220,1)', //border-color when hovered (area around)
                        pointHoverBorderWidth: 2, //border-width when hovered (area around)
                        pointRadius: 1, //size of the circles at the given values on the line
                        pointHitRadius: 1000,
                        data: [120,130,430,135,637,420,700,824,970,600,1130,1100] //data charting
                    },
                    {
                        label: 'Dessert Sales', //Title of the line chart
                        fill: false, //Boolean for color fill of area beneath the line
                        lineTension: 0.1, 
                        backgroundColor: 'lightgreen', //area beneath line color
                        borderColor: 'green', //line color
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',//point border color
                        pointBackgroundColor: '#fff',//point background color
                        pointBorderWidth: 1,//point border itself
                        pointHoverRadius: 5,//point radius itself when hovered
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)', //background color when hovered (area around)
                        pointHoverBorderColor: 'rgba(220,220,220,1)', //border-color when hovered (area around)
                        pointHoverBorderWidth: 2, //border-width when hovered (area around)
                        pointRadius: 1, //size of the circles at the given values on the line
                        pointHitRadius: 1000,
                        data: [140,160,245,390,549,690,890,931,770,1300,1050,1200] //data charting
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div style={{border:'5px black solid',width:'75%',marginBottom:10}}>
                <h3>Line Example</h3>
                <Line data={this.state.data}/>
            </div>

        )
    }

}

export default LineExample