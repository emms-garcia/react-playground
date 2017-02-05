export const TODO_CREATE = 'TODO_CREATE';
export const TODO_REMOVE = 'TODO_REMOVE';

export const createTodo = (data) => {
    return {
        type: TODO_CREATE,
        payload: data,
    };
};

export const removeTodo = (id) => {
    return {
        type: TODO_REMOVE,
        payload: id,
    }
};
