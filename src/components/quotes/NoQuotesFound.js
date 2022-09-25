import { Link } from 'react-router-dom';
import React from "react";
import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link className='btn' to='/comments/new-quote'>
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
