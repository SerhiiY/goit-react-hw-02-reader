import React from 'react';

import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';

import css from './style.module.css';

export default class Reader extends React.Component {
  
  state = {
    currentIndex: 0,
    isFirstPage: true,
    isLastPage: false,
  }

  lastPageIndex = this.props.items.length - 1;

  changePage = ({ target }) => {
    if (target.name === "next") {
      const isLastPage = this.state.currentIndex + 1 === this.lastPageIndex ? true : false;
      this.setState(({ currentIndex }) => ({ currentIndex: currentIndex + 1,  isFirstPage: false, isLastPage: isLastPage }) )
    } else {
      const isFirstPage = this.state.currentIndex - 1 === 0 ? true : false;
      this.setState(({ currentIndex }) => ({ currentIndex: currentIndex - 1, isFirstPage: isFirstPage, isLastPage: false }) )
    }
  }

  render() {
    const { currentIndex, isFirstPage, isLastPage } = this.state,
      { items } = this.props;

    return (
      <div className={css.Reader}>
        <Controls changePage={this.changePage} isFirstPage={isFirstPage} isLastPage={isLastPage}/>
        <Counter
          currentPage={currentIndex + 1}
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