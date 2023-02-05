import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  filter: '',
};

export default class Filter extends Component {
  state = INITIAL_STATE;

  filterId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    const { filter } = this.state;

    this.setState({ [name]: value });

    this.props.filterQueue(filter);
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <label htmlFor={this.filterId}>Find your contacts by name</label>
        <input
          type="text"
          name="filter"
          autoComplete="off"
          title="Find your contacts by name"
          id={this.filterId}
          value={filter}
          onChange={this.handleChange}
        />
      </>
    );
  }
}
