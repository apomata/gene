import React, { Component } from 'react';
import Column from './column.js'

export default class Container extends Component {
  render() {
    let columns = this.props.columns.map((c,i)=>{
      return<Column column={c} index={i} trial_count={this.props.trial_count}/>
    });

    return (
      <div className="container">
        {columns}
      </div>
    );
  }
}

