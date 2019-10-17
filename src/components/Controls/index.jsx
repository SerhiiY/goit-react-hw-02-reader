import React from 'react';
import css from './style.module.css';

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

export default Controls;