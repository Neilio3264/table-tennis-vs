import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CreateLeagues extends Component {
  state = {
    amount: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createLeagues(this.state.amount);
    this.setState({ amount: '' });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="formDiv">
        <form className="form" onSubmit={this.onSubmit} style={{ display: 'flex' }}>
          <input
            className="inputs"
            type="text"
            name="amount"
            //style={{flex: '5', padding: '5px'}}
            placeholder="Number of Leagues"
            value={this.state.amount}
            onChange={this.onChange}
          />
          <input
            className="inputs"
            type="submit"
            value="Create"
            className="btn"
            //style={{flex: '1'}}
          />
        </form>
      </div>
    );
  }
}

// CreateLeagues.propTypes = {
// }

export default CreateLeagues;
