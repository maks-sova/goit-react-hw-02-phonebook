import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
export default function ContactForm() {
  return (
    <div className={css.box}>
      <label for="name" className={css.labelStyle}>
        Name
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
      </label>
      <button className={css.btn}>Add contact</button>
    </div>
  );
}
ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
};
