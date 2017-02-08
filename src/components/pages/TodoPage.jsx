import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTodo, removeTodo } from '../../actions/todos';
import Todo from '../common/Todo';
import Page from './Page';

class TodoPage extends Component {
    static propTypes = {
        createTodo: React.PropTypes.func.isRequired,
        removeTodo: React.PropTypes.func.isRequired,
        todos: React.PropTypes.object.isRequired,
    };

    state = { text: '' };

    render () {
        const { todos } = this.props;
        return (
            <Page>
                <div className='row'>
                    <div className='input-field col s3'>
                        <input
                            className='validate'
                            id='todo'
                            onChange={(e) => this.setState({ text: e.target.value })}
                            type='text'
                            value={this.state.text }
                        />
                        <label htmlFor='todo'>Todo</label>
                    </div>
                    <div className='input-field col s6'>
                        <button
                            className='waves-effect waves-light btn btn-large'
                            onClick={this.createTodo.bind(this)}
                        >Add Todo</button>
                    </div>
                </div>
                <div className='row'>
                    {
                        Object.keys(todos).length ? Object.values(todos).map((todo, idx) => {
                            return (
                                <div className='col s3' key={idx}>
                                    <Todo
                                        removeCallback={this.removeTodo.bind(this)}
                                        todo={todo}
                                    />
                                </div>
                            );
                        }) : <h3 className='center-align'>No todos :(</h3>
                    }
                </div>
            </Page>
        );
    }

    createTodo () {
        if (this.state.text) {
            this.props.createTodo(this.state.text);
            this.setState({ text: '' });
        }
    }

    removeTodo (id) {
        this.props.removeTodo(id);
    }
}

const mapStateToProps = ({ todos }) => {
    return { todos };
};

export default connect(
    mapStateToProps,
    { createTodo, removeTodo },
)(TodoPage);
