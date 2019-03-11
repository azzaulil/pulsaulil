import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';


const items = ['Merah', 'Kuning', 'Hijau', 'Biru'];


ReactDOM.render(<App items={items}/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

