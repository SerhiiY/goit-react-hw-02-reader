import React from 'react';
import ReactDOM from 'react-dom';
import Reader from './components/Reader';
import publications from './components/publications.json'
import './style.css'

ReactDOM.render(<Reader items={publications}/>, document.getElementById('root'));