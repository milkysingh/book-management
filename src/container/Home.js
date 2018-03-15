import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import '../App.css';
import Header from '../components/Header';
import BookShelf from '../components/BookShelf';
import { Link } from 'react-router-dom';
import _ from 'lodash';
class Home extends Component {
  state = {
    allBooks: []
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    console.log(books);

    this.setState({ allBooks: books });
  }

  onSelectHandler = async (book, value) => {
    await BooksAPI.update(book, value);
    const books = await BooksAPI.getAll();
    this.setState({ allBooks: books });
    // console.log(updatedObj);
    // const tempBooks = this.state.allBooks.filter(b => {
    //   return b.id !== book.id;
    // });
    // console.log(tempBooks);
    // const transform = Object.keys(updatedObj);
    // .map(shelf => {
    //   [...Array(updatedObj[shelf])].forEach(arr => {
    //     arr.forEach(id => {
    //       tempObj[id] = shelf;
    //       combinedArray.push(tempObj);
    //     });
    //   });

    //   .reduce((obj, key) => {
    //     key.map(id => (obj[id] = shelf));
    //     return obj;
    //   }, {});
    // });
    // console.log(transform);
    // .map(igK => {
    //   return [...Array(updatedObj[igK])];
    // });
    //    transform.forEach(val=>{

    //    })
    //     _.forOwn(updatedObj, (value, key) => {
    //       value.forEach(id => {
    //         tempObj = {};
    //         tempObj[id] = key;
    //         combinedArray.push(tempObj);
    //       });
    //     });

    // const newBooks=this.state.allBooks.map(book=>{
    //         combinedArray.forEach((obj,index)=>{
    //             if(obj.)
    //         })

    // console.log(combinedArray);
  };

  render() {
    const shelfList = [
      { title: 'Currently Reading', category: 'currentlyReading' },
      { title: 'Want to Read', category: 'wantToRead' },
      { title: 'Read', category: 'read' }
    ];
    return (
      <div className="app">
        <div className="list-books">
          <Header title="MyReads" />
          <div className="list-books-content">
            <div>
              {shelfList.map(shelf => (
                <BookShelf
                  key={shelf.category}
                  title={shelf.title}
                  books={this.state.allBooks}
                  shelf={shelf.category}
                  onSelectHandler={this.onSelectHandler}
                />
              ))}
            </div>
          </div>
          <div className="open-search">
            <Link to="/searchBooks">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
