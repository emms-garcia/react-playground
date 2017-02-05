import _ from 'lodash';

import {
    TODO_ADD,
    TODO_REMOVE,
} from '../actions/todos';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {
                ...state,
                [_.uniqueId()]: action.payload,
            };
        case TODO_REMOVE:
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
};
