// const ContactList = ({ contacts, filteredContacts }) => {
//   console.log('filteredContactsInContactList:', filteredContacts);

//   if (filteredContacts) {
//     return filteredContacts.map(({ id, name, number }) => (
//       <li key={id}>
//         {name}: {number}
//       </li>
//     ));
//   } else {
//     return contacts.map(({ id, name, number }) => (
//       <li key={id}>
//         {name}: {number}
//       </li>
//     ));
//   }
// };
const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return filteredContacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <button
        id={id}
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  ));
};

export default ContactList;
