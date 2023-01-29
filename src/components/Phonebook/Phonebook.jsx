import React from 'react';
import css from './Phonebook.module.css';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  render() {
    const { contacts } = this.state;
    const cols = contacts.map(({ name, number }) => (
      <li>
        {name}:{number}
        <button type="button" className={css.btn}>
          Delete
        </button>
      </li>
    ));
    return (
      <div>
        <h1>Phonebook</h1>
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
        <h1>Contacts</h1>
        <div className={css.box}>
          <label className={css.labelStyle}>Find contacts by name</label>
          <input type="text" className={css.sting} />
          <ul>{cols}</ul>
        </div>
      </div>
    );
  }
}
