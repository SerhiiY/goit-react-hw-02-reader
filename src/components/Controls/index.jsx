import React from 'react';
import css from './style.module.scss';
import PropTypes from 'prop-types';


const Controls = ({ changePage, isFirstPage, isLastPage }) => (
  <section className={css.controls}>
    <button type="button" name="previous" className={css.button} onClick={changePage} disabled={isFirstPage}>
      Назад
      </button>

    <button type="button" name="next" className={css.button} onClick={changePage} disabled={isLastPage}>
      Вперед
      </button>
  </section>
);

Controls.propTypes = {
  changePage: PropTypes.func,
  siFirstPage: PropTypes.bool,
  isLastPage: PropTypes.bool,
}

Controls.defaultProps = {
  currentIndex: 1,
  itemsNumber: 1, 
}

export default Controls;