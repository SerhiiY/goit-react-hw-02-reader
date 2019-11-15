import React from 'react';

import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';

import css from './style.module.css';

export default class Reader extends React.Component {
  
  state = {
    currentIndex: 0,
  }

  handleClick = ({ target: { name } }) => {
    this.setState(({ currentIndex }) => name === "next" ? {currentIndex: currentIndex + 1} : {currentIndex: currentIndex - 1});
  }

  render() {
    const { currentIndex } = this.state,
      { items } = this.props;

    return (
      <div className={css.Reader}>
        <Controls
          handleClick={this.handleClick}
          currentPage={currentIndex}
          lastPage={items.length}
        />
        <Counter
          currentPage={currentIndex}
          lastPage={items.length}
        />
        <Publication
          title={items[currentIndex].title}
          text={items[currentIndex].text}
        />
      </div>
    );
  }
}