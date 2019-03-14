import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';


const items = [
    {
        name : "Red",
        color : "merah",
        img : "redberry.jpg"
    },
    {
        name : "Yellow",
        color : "kuning",
        img : "yellrose.jpg"
    },
    {
        name : "Green",
        color : "hijau",
        img : "green.jpg"
    },
    {
        name : "Blue",
        color : "biru",
        img : "blueberry.jpg"
    }

];


ReactDOM.render(<App items={items}/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

