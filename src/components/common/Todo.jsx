import PropTypes from 'prop-types';
import React from 'react';

const Todo = ({ removeCallback, todo }) => {
    return (
        <div className='card blue-grey'>
            <div className='card-content white-text'>
                <span className='card-title'>{ todo.name }</span>
            </div>
            <div className='card-action'>
                { /* eslint-disable-next-line */ }
                <a href={null} onClick={removeCallback.bind(null, todo.id)}>Complete</a>
            </div>
        </div>
    );
};

Todo.propTypes = {
    removeCallback: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired,
};

export default Todo;
