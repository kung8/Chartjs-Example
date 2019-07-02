import React, { Component } from 'react';
import './App.css';
import Doughnut from './Charts/Doughnut'
import Pie from './Charts/Pie'
import Bar from './Charts/Bar'
import Polar from './Charts/Polar'
import Bubble from './Charts/Bubble'
import Scatter from './Charts/Scatter'
import Line from './Charts/Line'

class App extends Component {
  render() {
    return (
      <div style={{margin:'50px auto',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1 style={{fontSize:100}}>Charts</h1>
        <Doughnut/>
        <Line/>
        <Pie/>
        <Bar/>
        <Polar/>
        <Bubble/>
        <Scatter/>
      </div>
    );
  }
}

export default App;
