import { fork, put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { setDefaultValue } from './SetDefaultValueMiddleware';
import { beforeAddNewTask } from './AddNewTaskMiddleware';

export default function* rootSagas() {
    yield fork(setDefaultValue);
    yield takeEvery(actionTypes.ADD_NEW_TASK, beforeAddNewTask);
}