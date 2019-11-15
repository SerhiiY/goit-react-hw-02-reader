import React from 'react';
import css from './style.module.css';
import PropTypes from 'prop-types';

const Counter = ({ currentPage, lastPage }) => (
    <p className={css.Counter}>{currentPage + 1}/{lastPage}</p>
  )  

Counter.defaultProps = {
  currentPage: 0,
  lastPage: 10,
};

Counter.propTypes = {
  currentPage: PropTypes.number,
  lastPage: PropTypes.number,
};  

export default Counter;