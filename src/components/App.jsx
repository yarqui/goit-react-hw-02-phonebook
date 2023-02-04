import React, { Component } from 'react';
import Form from './Form';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    // const { contacts, name } = this.state;
    return (
      <>
        <Form state={this.state}></Form>
        <ContactList></ContactList>
      </>
    );
  }
}
