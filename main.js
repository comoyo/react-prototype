import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.jsx';
import LatestArticle from './LatestArticle.jsx';


//ReactDOM.render(<App source="https://api.github.com/users/octocat/gists" />, document.getElementById('app'));


ReactDOM.render(<LatestArticle />, document.getElementById('LatestArticle'));
