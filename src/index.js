import {Provider} from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Weather from './components/Weather';
import {create_redux_store} from './store.js';

const store=create_redux_store();

ReactDOM.render(<Provider store={store}><Weather /></Provider>, document.getElementById('root'));


