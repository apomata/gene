import React, { Component } from 'react';

export default class Gene extends Component {
  render() {
    let gene = this.props.gene;
    let gene_count = this.props.gene_count;
    let trial_count = this.props.trial_count;
    let size = (gene_count/trial_count)*100;
    let scale = (gene_count/trial_count)*17;

    var row_style = {
      order: gene_count,
      flex: size
    };

    var p_style = {
      transform: `scaleY(${scale})`
    };

    return (
      <div className={`row ${gene}`} style={row_style}>
        <p style={p_style}>
          {gene}
        </p>
      </div>
    );
  }
}

