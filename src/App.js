import React, { Component } from 'react';
import './App.css';
import Container from './container.js'

class App extends Component {
  render() {
    var trial = [
      "AGATCGACCCT".split(''),
      "GGAACGACGCT".split(''),
      "GGATCGACCCT".split(''),
      "CGATAGACGCT".split(''),
      "CGATAGACGCT".split(''),
      "GGATCGACCCT".split('')
    ];
    var columns = Array.apply(null, Array(trial[0].length)).map(function() { return {} });

    trial.forEach((person)=>{
    	person.forEach((gene, i)=>{
      	columns[i][gene] = columns[i][gene] ? columns[i][gene]+1 : 1;
       });
    });

    return (
      <div className="App">
        <Container columns={columns} trial_count={trial.length}/>
      </div>
    );
  }
}

export default App;
