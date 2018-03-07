import React, { Component } from 'react';
import Gene from './gene.js'
import Index from './index_element.js'

export default class Column extends Component {
  render() {
    let column = this.props.column;
    let rows = [];
    Object.keys(column).forEach((gene)=>{
      rows.push(<Gene gene={gene} gene_count={column[gene]} trial_count={this.props.trial_count}/>);
    });

    return (
      <div className="column">
        {rows}
        <Index>{this.props.index+1}</Index>
      </div>
    );
  }
}

