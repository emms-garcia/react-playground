import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTodo, removeTodo } from '../../actions/todos';
import Page from './Page';

class TodoPage extends Component {
    static propTypes = {
        createTodo: React.PropTypes.func.isRequired,
        removeTodo: React.PropTypes.func.isRequired,
        todos: React.PropTypes.object.isRequired,
    };

    render () {
        return (
            <Page header={'Todo Page'}>
                <h5>This is the Todo Page</h5>
            </Page>
        );
    }
}

const mapStateToProps = ({ todos }) => {
    return { todos };
};

export default connect(
    mapStateToProps,
    { createTodo, removeTodo },
)(TodoPage);
