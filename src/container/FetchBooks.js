import React, { Component } from 'react';
import Search from '../components/Search';
import * as BooksAPI from '../BooksAPI';
import Book from '../components/Book';
class Fetchbooks extends Component {
  state = {
    searchedBooks: []
  };

  onSelectHandler = async (book, value) => {
    console.log(value);
    await BooksAPI.update(book, value);
  };
  queryHandler = async query => {
    console.log(query);
    let books;
    if (query) {
      books = await BooksAPI.search(query);
    }
    console.log(books);
    if (books) {
      return this.setState({ searchedBooks: books });
    }
    this.setState({ searchedBooks: [] });
  };
  render() {
    let renderBooks;
    if (this.state.searchedBooks.length > 0) {
      renderBooks = this.state.searchedBooks.map(book => (
        <Book
          key={book.id}
          book={book}
          onSelectHandler={e => {
            this.onSelectHandler(book, e.target.value);
          }}
        />
      ));
    }

    return (
      <div className="search-books">
        <Search queryHandler={this.queryHandler} />
        <div className="search-books-results">
          {this.state.searchedBooks.length > 0 ? (
            <ol className="books-grid">{renderBooks}</ol>
          ) : (
            'No results'
          )}
        </div>
      </div>
    );
  }
}

export default Fetchbooks;
