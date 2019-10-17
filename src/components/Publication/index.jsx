import React from 'react';
import css from './style.module.css';
import PropTypes from 'prop-types';

const Publication = ({ title, text }) => {
  
  return (
    <article className={css.Publication}>
      <h2>{title}</h2>
      <p>
        {text}
      </p>
    </article>
  )
};

Publication.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

Publication.defaultProps = {
  title: '',
  text: '',
}

export default Publication;