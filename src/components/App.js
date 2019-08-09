import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import CreateBook from './books/CreateBook';
import Header from './header/Header';
import PageNotFound from './PageNotFound';
import ManageBookPage from './books/ManageBookPage';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/books" component={CreateBook} />
        <Route path="/book/:slug" component={ManageBookPage} />
        <Route path="/book" component={ManageBookPage} />
        <Route component={PageNotFound} />
      </Switch>

    </div>
  );
}
export default App;
