import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

class BarExample extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                labels: ['Math', 'Science', 'History', 'English'],
                datasets: [
                    {
                        label: 'John', //Title of chart
                        backgroundColor: 'pink', //background color of bar (including next to title)
                        borderColor: 'red', //border color of bar (including next to title)
                        borderWidth: 2, //border width of bar (including next to title)
                        hoverBackgroundColor: 'red', //hover color
                        hoverBorderColor: 'pink', //border color when hovered
                        data: [100, 69, 90, 81] //This is displayed 
                    },
                    {
                        label: 'Steve', //Title of chart
                        backgroundColor: 'lightgreen', //background color of bar (including next to title)
                        borderColor: 'green', //border color of bar (including next to title)
                        borderWidth: 2, //border width of bar (including next to title)
                        hoverBackgroundColor: 'green', //hover color
                        hoverBorderColor: 'lightgreen', //border color when hovered
                        data: [90, 84, 89, 71] 
                    },
                    {
                        label: 'Cameron', //Title of chart
                        backgroundColor: 'lightblue', //background color of bar (including next to title)
                        borderColor: 'blue', //border color of bar (including next to title)
                        borderWidth: 2, //border width of bar (including next to title)
                        hoverBackgroundColor: 'blue', //hover color
                        hoverBorderColor: 'lightblue', //border color when hovered
                        data: [67, 73, 85, 91]
                    },
                    {
                        label: 'Kyle', //Title of chart
                        backgroundColor: 'lavender', //background color of bar (including next to title)
                        borderColor: 'purple', //border color of bar (including next to title)
                        borderWidth: 2, //border width of bar (including next to title)
                        hoverBackgroundColor: 'purple', //hover color
                        hoverBorderColor: 'lavender', //border color when hovered
                        data: [78, 97, 73, 79]
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div style={{ border: '5px black solid', width:'75%',marginBottom: 10 }}>
                <h3>Bar Example</h3>
                <Bar data={this.state.data}
                
                 width={1060} //width of the chart (the above width is overriding this too)
                 height={350} //height of the chart
                 options={{
                   maintainAspectRatio: false 
                 }}
                 />
            </div>
        )
    }

}

export default BarExample