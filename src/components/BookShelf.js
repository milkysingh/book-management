import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';

const bookShelf = ({ title, books, shelf, onSelectHandler }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList
          bookList={books}
          shelf={shelf}
          onSelectHandler={onSelectHandler}
        />
      </div>
    </div>
  );
};
export default bookShelf;

bookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired
};
