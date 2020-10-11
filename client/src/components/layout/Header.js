import React, { Component } from 'react';

export class header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1>Table Tennis VS</h1>
      </header>
    );
  }
}

const headerStyle = {
  background: '#6699ff',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

export default header;
