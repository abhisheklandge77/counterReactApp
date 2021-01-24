// import { Component } from 'react';
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'


class App extends Component {

  state = {
    counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ]
}
handleIncreament = counter => {
    const counters = [...this.state.counters];
    const index = counters.findIndex((c)=>{ return c.id === counter});
    counters[index].value++;
    this.setState({ counters });
}
handleDecreament = counter => {
    const counters = [...this.state.counters];
    const index = counters.findIndex((c)=>{ return c.id === counter});
    if(counters[index].value > 0){
    counters[index].value--;
    }
    this.setState({ counters });
}
handleReset = counter => {
  const counters = [...this.state.counters];
  const index = counters.findIndex((c)=>{ return c.id === counter});
  counters[index].value = 0;
  this.setState({ counters });
}
handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
}

  render() { 
    return ( 
      <React.Fragment>
      <NavBar />
      <span>learn react</span>
      <main className = 'container'>
        <Counters 
        counters = {this.state.counters}
        onIncreament = {this.handleIncreament}
        onDecreament = {this.handleDecreament}
        onDelete = {this.handleDelete}
        onReset = {this.handleReset}
        />
      </main> 
      </React.Fragment>
      );
  }
}
 
export default App;

