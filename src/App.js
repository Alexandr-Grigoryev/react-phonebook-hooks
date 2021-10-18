import { useState, useEffect } from "react";
import Container from "./Components/Container/Container";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import ContactListItem from "./Components/ContactListItem/ContactListItem";
import Filter from "./Components/Filter/Filter";
import shortid from "shortid";

export default function App() {
  // state = {
  //   contacts: [
  //     // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   filter: "",
  // };
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  // componentDidMount() {
  //   // console.log('App componentDidMount');

  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  // componentDidUpdate(prevProps, prevState) {
  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem("contacts", JSON.stringify(nextContacts));
  //   }

  useEffect(() => {
    // const nextContacts = this.state.contacts;
    // const prevContacts = prevState.contacts;

    if (contacts !== setContacts((prevState) => prevState)) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  // if (nextContacts.length > prevContacts.length && prevContacts.length !== 0) {
  //   this.toggleModal();
  // }

  const formSubmitHandler = (name, number) => {
    console.log(name);

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    // const { contacts } = this.state;

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts((prevState) => [contact, ...prevState]);
    }
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    // const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteItem = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  // const { filter } = this.state;
  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList list={visibleContacts} onDelete={deleteItem}>
        {visibleContacts.map((item) => (
          <ContactListItem
            item={item}
            key={item.id}
            onDelete={deleteItem}
            id={item.id}
          />
        ))}
      </ContactList>
    </Container>
  );
}
