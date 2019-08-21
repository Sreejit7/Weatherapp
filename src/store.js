import {createStore, applyMiddleware} from 'redux';
import {weather} from './reducers/weatherFunction';
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
export const create_redux_store=()=>createStore(weather,applyMiddleware(thunk,logger));