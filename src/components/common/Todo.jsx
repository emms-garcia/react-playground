import React from 'react';

const Todo = ({ removeCallback, todo }) => {
    return (
        <div className='card blue-grey darken-1'>
            <div className='card-content white-text'>
                <span className='card-title'>{ todo.name }</span>
            </div>
            <div className='card-action'>
                <a href='#' onClick={removeCallback.bind(null, todo.id)}>Complete</a>
            </div>
        </div>
    );
};

Todo.propTypes = {
    removeCallback: React.PropTypes.func.isRequired,
    todo: React.PropTypes.object.isRequired,
};

export default Todo;
