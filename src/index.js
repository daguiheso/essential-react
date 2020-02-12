import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './components/HelloWorld'
import Button from './components/Button'
import * as serviceWorker from './serviceWorker';

const texts = {
  text: 'Click',
  text2: 'Click2',
  text3: 'Click3'
}
ReactDOM.render(<Button {...texts} />, document.getElementById('root'));
// ReactDOM.render(<HelloWorld />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
