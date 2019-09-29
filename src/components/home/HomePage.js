import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="jumbotron">
    <h1>Book store application</h1>
    <Link to="createBook" className="btn btn-primary btn-lg">
      Create Book
    </Link>
  </div>
);
export default HomePage;
