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
  removContact(id) {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: newContacts };
    });
  }
  addContact = e => {
    e.preventDefault();
    this.setState(prevState => {
      const { name, number, contacts } = prevState;
      if (this.isDublicate(name, number)) {
        return alert(`${name}.Number:${number} is already ixist`);
      }
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return { contacts: [newContact, ...contacts], name: '', number: '' };
    });
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  isDublicate(name, number) {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const { contacts } = this.state;
    const contact = contacts.find(({ name, number }) => {
      return (
        name.toLowerCase() === normalizedName &&
        number.toLowerCase() === normalizedNumber
      );
    });
    return Boolean(contact);
  }
  getFilterContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizeFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizeFilter) ||
        number.toLowerCase().includes(normalizeFilter)
      );
    });
    return result;
  }
  render() {
    const { addContact, handleChange } = this;
    const { name, number } = this.state;
    const contacts = this.getFilterContacts();
    const cols = contacts.map(({ id, name, number }) => (
      <li key={id} className={css.liStyle}>
        {name}:{number}
        <button
          type="button"
          className={css.btn}
          onClick={() => this.removContact(id)}
        >
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
              value={name}
              onChange={handleChange}
              className={css.sting}
              // id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label className={css.labelStyle}>Number</label>
            <input
              value={number}
              onChange={handleChange}
              className={css.sting}
              // id="name"
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
          <input
            type="text"
            className={css.sting}
            name="filter"
            onChange={handleChange}
          />
          <ul className={css.ulstyle}>{cols}</ul>
        </div>
      </div>
    );
  }
}
