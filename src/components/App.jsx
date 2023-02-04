import React, { Component } from 'react';
import ContactForm from './ContactForm';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <ContactForm contacts={contacts} nameState={name}></ContactForm>
        {/* <ContactList></ContactList> */}
      </>
    );
  }
}
