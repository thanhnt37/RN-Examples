import * as types from '../actions/actionTypes';

const initialState = {
    data: ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can']
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case types.ADD_NEW_TASK:
            return {
                data: [...state.data, action.data]
            };
        default:
            return {
                data: [...state.data]
            };
    }
}
