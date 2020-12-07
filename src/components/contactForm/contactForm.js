import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import "./contactForm.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInput = (evt) => {
    const newId = uuidv4();
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value, id: newId });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onFormSubmit(this.state);
    this.resetForm();
  };

  resetForm() {
    this.setState({ name: "", number: "" });
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="label">
          Name
          <input
            className="input inputName"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInput}
          />
        </label>
        <label className="label">
          Number
          <input
            className="input"
            name="number"
            type="number"
            value={this.state.number}
            onChange={this.handleInput}
          />
        </label>

        <button className="btnAdd" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default ContactForm;
