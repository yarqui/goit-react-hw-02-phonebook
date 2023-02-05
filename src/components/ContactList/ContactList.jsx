import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
