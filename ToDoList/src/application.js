import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers/index';

import createSagaMiddleware from 'redux-saga';
import { fork, put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import rootSaga from './middlewares';

import ToDoListContainner from './containers/ToDoListContainner';

const sagaMiddleware = createSagaMiddleware();


let store = createStore(reducers, {}, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                <ToDoListContainner />
            </Provider>
        );
    }
}

export default Application;