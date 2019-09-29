import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from '../components/home/HomePage';
import Header from '../components/header/Header';
import PageNotFound from '../components/PageNotFound';
import CreateBook from './createBook';
import UpdateBook from './updateBook';
import BookList from './bookList';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/books" component={BookList} />
      <Route exact path="/createBook" component={CreateBook} />
      <Route exact path="/updateBook/:id" component={UpdateBook} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);
export default App;
