import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Section from './Section';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [{ id: 1, name: 'Robert', number: 98238 }],
  };

  submitHandler = ({ id, name, number }) => {
    id = nanoid();

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id, name, number }],
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm submitHandler={this.submitHandler}></ContactForm>
        </Section>

        <Section title="Contacts">
          <ContactList></ContactList>
        </Section>
      </>
    );
  }
}

// export default App;
