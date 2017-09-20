import { fork, put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

export function * setDefaultValue()
{
    console.log('message from setDefaultValue()');
    yield put({type: actionTypes.ADD_NEW_TASK, data: "default task created from middleware"});
}