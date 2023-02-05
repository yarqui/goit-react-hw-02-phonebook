import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
// const INITIAL_STATE = {
//   filter: '',
// };

const Filter = ({ filterQueue }) => {
  //   state = INITIAL_STATE;

  const filterId = nanoid();

  //   handleChange = e => {
  //     const { name, value } = e.target;
  //     const { filter } = this.state;

  //     this.setState({ [name]: value });

  //     this.props.filterQueue(filter);
  //     // setTimeout(() => {
  //     // }, 300);
  //   };

  const handleChange = e => {
    const { value } = e.target;

    filterQueue(value.trim().toLowerCase());
  };

  return (
    <>
      <label htmlFor={filterId}>Find your contacts by name</label>
      <input
        type="text"
        name="filter"
        autoComplete="off"
        title="Find your contacts by name"
        id={filterId}
        //   value={filter}
        onChange={handleChange}
      />
    </>
  );
};

Filter.propTypes = {
  filterQueue: PropTypes.func.isRequired,
};

export default Filter;
