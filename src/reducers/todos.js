import _ from 'lodash';

import {
    TODO_CREATE,
    TODO_REMOVE,
} from '../actions/todos';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case TODO_CREATE:
            const todoID = _.uniqueId();
            return {
                ...state,
                [todoID]: {
                    id: todoID,
                    name: action.payload,
                },
            };
        case TODO_REMOVE:
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
};
