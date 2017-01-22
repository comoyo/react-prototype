<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Api
Route::any('home', 'ApiController@index');
Route::any('latest-article', 'ApiController@getLatestArticles')->middleware('cors');
Route::any('popular-article', 'ApiController@getPopularArticles')->middleware('cors');
Route::any('slider', 'ApiController@getSliders')->middleware('cors');


