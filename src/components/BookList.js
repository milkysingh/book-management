import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
const bookList = ({ bookList, shelf, onSelectHandler }) => {
  const renderBooksByShelves = () => {
    return bookList.filter(book => book.shelf === shelf).map(book => {
      return (
        <Book
          book={book}
          key={book.id}
          onSelectHandler={e => {
            console.log(e.target.value);
            onSelectHandler(book, e.target.value);
          }}
        />
      );
    });
  };

  return <ol className="books-grid">{renderBooksByShelves()}</ol>;
};
export default bookList;
bookList.propTypes = {
  bookList: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired
};
