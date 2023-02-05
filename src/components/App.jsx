import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './Filter';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // checkIfContactExists = queue => {
  //   const { contacts } = this.state;

  //   console.log(
  //     'checkIfExists',
  //     contacts.some(contact => contact.name === queue)
  //   );

  //   contacts.some(contact => contact.name === queue);
  // };

  handleSubmit = ({ id, name, number }) => {
    const { contacts } = this.state;

    // const alreadyExists = this.checkIfContactExists(name);
    // console.log('alreadyExists:', alreadyExists);

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    id = nanoid();
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id, name, number }],
    }));
  };

  // handleFilter = queue => {
  //   this.setState({ filter: queue });
  // };
  handleFilter = queue => {
    queue ? this.setState({ filter: queue }) : this.setState({ filter: '' });
  };

  showFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return filteredContacts;
  };

  deleteFromContacts = () => {};

  render() {
    const { filter } = this.state;
    // const { contacts } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm handleSubmit={this.handleSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter filterQueue={this.handleFilter}></Filter>
          <ul>
            <ContactList
              // contacts={contacts}
              filteredContacts={this.showFilteredContacts()}
              filter={filter}
            />
          </ul>
        </Section>
      </>
    );
  }
}

// export default App;
