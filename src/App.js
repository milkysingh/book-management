import React from 'react';
import Home from './container/Home';
import FetchBooks from './container/FetchBooks';
import { BrowserRouter, Route } from 'react-router-dom';
class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />

          <Route path="/searchBooks" component={FetchBooks} />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
