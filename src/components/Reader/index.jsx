import React from 'react';

import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';

import css from './style.module.css';

export default class Reader extends React.Component {
  
  state = {
    currentIndex: 0,
  }

  componentDidMount() {
    document.querySelector('[name="previous"]').disabled = true;
  }

  changePage = (isNext) => {
    this.setState(({ currentIndex }) => isNext ? { currentIndex: currentIndex += 1 } : { currentIndex: currentIndex -=1 });
  }

  render() {
    const { currentIndex } = this.state,
      { items } = this.props;

    return (
      <div className={css.Reader}>
        <Controls changePage={this.changePage} currentIndex={currentIndex} itemsNumber={items.length}/>
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