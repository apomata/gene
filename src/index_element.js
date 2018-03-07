import React, { Component } from 'react';

export default class Index extends Component {
  render() {
    var row_style = {
      order: 0,
      flex: 20
    };

    return (
      <div className="row" style={row_style}>
        <p className="index">
          {this.props.children}
        </p>
      </div>
    );
  }
}

