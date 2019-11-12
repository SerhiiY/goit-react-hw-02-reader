import React from 'react';
import css from './style.module.scss';
import PropTypes from 'prop-types';


const Controls = ({ changePage, currentIndex, itemsNumber }) => {

  const handleNext = ({ target }) => { 
    currentIndex + 1 === itemsNumber - 1 ? target.disabled = true : target.disabled = false;
    target.previousSibling.disabled = false;
    changePage(true);
  }

  const handlePrevious = ({ target }) => {
    currentIndex - 1 === 0 ? target.disabled = true : target.disabled = false;
    target.nextSibling.disabled = false;
    changePage(false);
}

  return (
    <section className={css.controls}>
      <button type="button" name="previous" className={css.button} onClick={handlePrevious}>
        Назад
      </button>

      <button type="button" name="next" className={css.button} onClick={handleNext}>
        Вперед
      </button>
    </section>
  );
}

Controls.propTypes = {
  changePage: PropTypes.func,
  currentIndex: PropTypes.number,
  itemsNumber: PropTypes.number,
}

Controls.defaultProps = {
  currentIndex: 1,
  itemsNumber: 1, 
}

export default Controls;