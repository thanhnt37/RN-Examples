import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as ToDoListActions from '../actions/TodoListActions';
import ToDoListComponent from '../components/ToDoListComponent';

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {state, actions} = this.props;
        return (
            <ToDoListComponent {...actions} items={state.toDolists.data} />
        );
    }
}

export default connect(
    state => ({
        state: state
    }),
    dispatch => ({
        actions: bindActionCreators(ToDoListActions, dispatch)
    })
)(ToDoList);