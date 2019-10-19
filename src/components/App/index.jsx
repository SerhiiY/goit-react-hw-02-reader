import React from 'react';

import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';

import publications from './publications.json'
import css from './style.module.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    }
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  componentDidMount() {
    const savedIndex = +localStorage.getItem('currentPageIndex');
    if (savedIndex) this.setState({ currentIndex: savedIndex });
    this.checkCurrentIndex();
  }

  componentDidUpdate(prevState) {
    if(prevState.currentIndex === this.state.currentIndex) return;
    localStorage.setItem('currentPageIndex', this.state.currentIndex);
    this.checkCurrentIndex();
  }

  checkCurrentIndex() {
    const { currentIndex } = this.state,
      prevBtn = document.querySelector('[name="previous-btn"]'),
      nextBtn = document.querySelector('[name="next-btn"]');
    
    currentIndex === (publications.length - 1) ? nextBtn.disabled = true : nextBtn.disabled = false;
    currentIndex === 0 ? prevBtn.disabled = true : prevBtn.disabled = false;
  }

  nextPage() {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex += 1 }));
  }

  prevPage() {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex -= 1 }))
  }

  render() {
    const currentIndex = this.state.currentIndex;
    return (
      <div className={css.Reader}>
        <Controls onNextPage={this.nextPage} onPrevPage={this.prevPage}/>
        <Counter
          currentPage={currentIndex + 1}
          lastPage={publications.length}
        />
        <Publication
          title={publications[currentIndex].title}
          text={publications[currentIndex].text}
        />
      </div>
    );
  }
}

export default App;
