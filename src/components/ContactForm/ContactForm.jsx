// import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Please, enter contact name'),
});

const initialValues = {
  name: '',
};

const ContactForm = ({ nameState, contacts }) => {
  //   const contactId = nanoid();

  const handleSubmit = (values, { resetForm }) => {
    console.log('values:', values);

    resetForm();
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id="name"
            placeholder="Contact name"
            required
          />
          <button type="submit">Add contact</button>
          <ErrorMessage name="name" component="div" />
        </Form>
      </Formik>
      <h2>Contacts</h2>
      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default ContactForm;
