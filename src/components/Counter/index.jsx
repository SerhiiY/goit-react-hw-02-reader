import React from 'react';
import css from './style.module.css';
import PropTypes from 'prop-types';

const Counter = ({ currentPage, lastPage }) => {
  
  return (
    <p className={css.Counter}>{currentPage}/{lastPage}</p>
  )  
}

Counter.defaultProps = {
  currentPage: 1,
  lastPage: 10,
};

Counter.propTypes = {
  currentPage: PropTypes.number,
  lastPage: PropTypes.number,
};  

export default Counter;