import React from 'react';
import css from './style.module.css';
import PropTypes from 'prop-types';

const Controls = ({onPrevPage, onNextPage}) => {

  return (
    <section className={css.Controls}>
      <button
        type="button"
        className={css.button}
        onClick={onPrevPage}
      >
        Назад
      </button>

      <button
        type="button"
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