import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Filter = ({ filterQueue }) => {
  const filterId = nanoid();

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
        onChange={handleChange}
      />
    </>
  );
};

Filter.propTypes = {
  filterQueue: PropTypes.func.isRequired,
};

export default Filter;
