import React from 'react';
import ReactDOM from 'react-dom';
import IssueList from './IssueList.jsx';
import 'babel-polyfill';
import 'whatwg-fetch';

const element = <IssueList />;

ReactDOM.render(element, document.getElementById('contents'));
