import React, { Component } from "react";
import PropTypes from "prop-types";

class Filter extends Component {
  render() {
    return (
      <label className="label">
        Find contacts by name
        <input
          className="input"
          name="filter"
          type="text"
          onChange={this.props.handleFilterInput}
        ></input>
      </label>
    );
  }
}
Filter.propTypes = {
  handleFilterInput: PropTypes.func,
};

export default Filter;
