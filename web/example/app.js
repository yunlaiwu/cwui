/**
 * @Author Zak
 * @Date 2016-06-16
 */

 "use strict";

 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Router, Route } from 'react-router';
 import cwui from '../src/index';

 import Button from './pages/button/index';

 ReactDOM.render((
   <Router>
     <Route path="/button" component={Button}/>
   </Router>
 ), document.getElementById('container'))
