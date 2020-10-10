import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class CreateLeagues extends Component {
  state = {
    amount: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createLeague(this.state.amount)
    this.setState({amount:''})
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display:'flex'}}>
        <input 
          type="text"
          name="title"
          style={{flex: '5', padding: '5px'}}
          placeholder="Number of Leagues"
          value={this.state.amount}
          onChange={this.onChange}
        />
        <input
          type="create"
          value="Create"
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

CreateLeagues.propTypes = {
}

export default CreateLeagues
