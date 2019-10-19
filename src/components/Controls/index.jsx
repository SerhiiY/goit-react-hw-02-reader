import React from 'react';
import css from './style.module.scss';
import PropTypes from 'prop-types';

const Controls = ({onPrevPage, onNextPage}) => {

  return (
    <section className={css.controls}>
      <button
        type="button"
        name="previous-btn"
        className={css.button}
        onClick={onPrevPage}
      >
        Назад
      </button>

      <button
        type="button"
        name="next-btn"
        className={css.button}
        onClick={onNextPage}
      >
        Вперед
      </button>
    </section>
  )  
}

Controls.propTypes = {
  onPrevPage: PropTypes.func,
  onNextPage: PropTypes.func,
}

export default Controls;