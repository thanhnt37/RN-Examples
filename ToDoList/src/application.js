import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './reducers/index';

import ToDoLists from './containers/ToDoListContainner';

let store = createStore(reducers);

class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                <ToDoLists />
            </Provider>
        );
    }
}

export default Application;