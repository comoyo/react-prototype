import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './app/Navigation.jsx';
import LatestArticle from './app/LatestArticle.jsx';
import Carousel from './app/Carousel.jsx';
import PopularArticle from './app/PopularArticle.jsx';

//ReactDOM.render(
//    <Navigation />, document.getElementById('react-navigation')
//);

ReactDOM.render(
    <LatestArticle />, document.getElementById('react-latest-articles')
);


ReactDOM.render(
    <Carousel />, document.getElementById('react-home-carousel')
);

ReactDOM.render(
    <PopularArticle />, document.getElementById('react-popular-articles')
);