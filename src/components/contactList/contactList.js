import React, { Component } from "react";
import PropTypes from "prop-types";
import "./contactList.css";

class ContactList extends Component {
  filterItems = (query) => {
    return this.props.contacts.filter(
      (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  render() {
    return (
      <ul className="contact-list">
        {this.filterItems(this.props.filter).map((item) => (
          <li className="contact-item" key={item.id}>
            <p className="contact-item__text">
              {item.name} :
              <span className="contact-item__number">{item.number}</span>
            </p>
            <button
              className="btnDelete"
              type="button"
              onClick={() => this.props.deleteContact(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};

export default ContactList;
