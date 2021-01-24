import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  
    render() {
        return (<div>
            {this.props.counters.map(counter =>
                <Counter key={counter.id} 
                counter = {counter}
                onDelete={this.props.onDelete} 
                onIncreament = {this.props.onIncreament}
                onDecreament = {this.props.onDecreament}
                onReset = {this.props.onReset}
                />

            )}
        </div>);
    }
}

export default Counters;