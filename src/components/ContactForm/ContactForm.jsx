import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';

// const validationSchema = yup.object().shape({
//   name: yup.string().required('Please, enter contact name'),
// });

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  state = INITIAL_STATE;

  nameInputId = nanoid();
  numberInputId = nanoid();

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.handleSubmit(this.state);

    this.resetForm();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={this.nameInputId}
          placeholder="Contact name"
          required
          autoComplete="off"
          onChange={this.handleChange}
          value={this.state.name}
        />

        <label htmlFor={this.numberInputId}>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={this.numberInputId}
          required
          autoComplete="off"
          onChange={this.handleChange}
          value={this.state.number}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
