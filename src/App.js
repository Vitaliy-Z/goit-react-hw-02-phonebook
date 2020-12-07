import React, { Component } from "react";
import ContactForm from "./components/contactForm/contactForm";
import Filter from "./components/filter/filter";
import ContactList from "./components/contactList/contactList";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onFormSubmit = (data) => {
    if (data.name === "" && data.number === "") {
      alert("Please, enter name and number");
      return;
    }

    this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(data.name + " is already in contacts")
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, data],
        }));
  };

  handleFilterInput = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  deleteContact = (idContact) =>
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== idContact
      ),
    }));

  render() {
    return (
      <div className="container">
        <h1 className="title">phonebook</h1>
        <ContactForm onFormSubmit={this.onFormSubmit} />
        <h2 className="title-contacts">contacts</h2>
        <Filter handleFilterInput={this.handleFilterInput} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
