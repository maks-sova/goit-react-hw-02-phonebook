import React from 'react';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContact = e => {};

  render() {
    const { addContact } = this;
    const { contacts } = this.state;
    const cols = contacts.map(({ id, name, number }) => (
      <li key={id} className={css.liStyle}>
        {name}:{number}
        <button type="button" className={css.btn}>
          Delete
        </button>
      </li>
    ));
    return (
      <div>
        <h1>Phonebook</h1>
        <form action="" onSubmit={addContact}>
          <div className={css.box}>
            <label for="name" className={css.labelStyle}>
              Name
            </label>
            <input
              className={css.sting}
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label className={css.labelStyle}>Number</label>
            <input
              className={css.sting}
              id="name"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />

            <button className={css.btn}>Add contact</button>
          </div>
        </form>
        <h1>Contacts</h1>
        <div className={css.box}>
          <label className={css.labelStyle}>Find contacts by name</label>
          <input type="text" className={css.sting} />
          <ul className={css.ulstyle}>{cols}</ul>
        </div>
      </div>
    );
  }
}
