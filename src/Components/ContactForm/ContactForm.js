import { useState } from "react";
import s from "./ContactForm.module.css";

// export default class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.currentTarget.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.currentTarget.value);
  };

  // const handleChange = e => {
  //   const valueOption = e.target.name;
  //   switch (valueOption) {
  //     case 'name':
  //       setName(e.target.value);
  //       break;
  //     case 'number':
  //       setNumber(e.target.value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.currentTarget.value);

    onSubmit(name, number);

    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.formButton}>
      <p>Name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleNameChange}
        value={name}
      />

      <p>Number</p>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleNumberChange}
        value={number}
      />

      <button name="" type="submit">
        Add contact
      </button>
    </form>
  );
}
