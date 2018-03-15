import React from 'react';
import PropTypes from 'prop-types';
const header = ({ title }) => {
  return (
    <div className="list-books-title">
      <h1>{title}</h1>
    </div>
  );
};
export default header;

header.prototype = {
  title: PropTypes.string
};
