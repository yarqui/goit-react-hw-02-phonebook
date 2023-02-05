const ContactList = ({ contacts, filteredContacts }) => {
  console.log('filteredContactsInContactList:', filteredContacts);

  if (filteredContacts) {
    return filteredContacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
      </li>
    ));
  } else {
    return contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
      </li>
    ));
  }
};

export default ContactList;
