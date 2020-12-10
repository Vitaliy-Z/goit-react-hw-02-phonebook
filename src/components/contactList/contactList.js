import React from "react";
import PropTypes from "prop-types";
import "./contactList.css";

function ContactList({ contacts, filter, deleteContact }) {
  const filterItems = (query) => {
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <ul className="contact-list">
      {contacts.length === 0 ? (
        <p className="contact-item__text">
          There are no contacts on your list yet
        </p>
      ) : (
        filterItems(filter).map((item) => (
          <li className="contact-item" key={item.id}>
            <p className="contact-item__text">
              {item.name} :
              <span className="contact-item__number">{item.number}</span>
            </p>
            <button
              className="btnDelete"
              type="button"
              onClick={() => deleteContact(item.id)}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};

export default ContactList;
