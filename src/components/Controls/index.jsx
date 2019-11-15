import React from 'react';
import css from './style.module.scss';
import PropTypes from 'prop-types';


const Controls = ({ handleClick, currentPage, lastPage }) => (
  <section className={css.controls}>
    <button type="button" name="previous" className={css.button} onClick={handleClick} disabled={currentPage === 0}>
      Назад
      </button>

    <button type="button" name="next" className={css.button} onClick={handleClick} disabled={currentPage === lastPage - 1}>
      Вперед
      </button>
  </section>
);

Controls.propTypes = {
  changePage: PropTypes.func,
  currentPage: PropTypes.number,
  lastPage: PropTypes.number,
}

Controls.defaultProps = {
  currentPage: 0,
  lastPage: 1,
}

export default Controls;