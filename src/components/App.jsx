import React from 'react';

import Controls from './Controls';
import Counter from './Counter';
import Publication from './Publication';

import publications from './publications.json'
import css from './App.module.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    }
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  nextPage() {
    if (this.state.currentIndex === (publications.length - 1)) return;
    this.setState(prevState => ({ currentIndex: prevState.currentIndex += 1 }));
  }

  prevPage() {
    if (this.state.currentIndex === 0) return;
    this.setState(prevState => ({currentIndex: prevState.currentIndex -= 1}))
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
