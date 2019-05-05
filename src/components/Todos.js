import React from 'react';
import {connect} from 'react-redux';

import List from './List';
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo
} from '../actions/todos';


class Todos extends React.Component {

    addTodo = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAddTodo(this.textInput.value, () => this.textInput.value = ''));
    };

    removeTodo = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo));
    };

    toggleTodo = (todo) => {
        this.props.dispatch(handleToggleTodo(todo));
    };

    render() {
        return (
            <div>
                <h1>Todo list</h1>
                <input
                    type='text'
                    placeholder='add todo'
                    ref={(input) => {
                        this.textInput = input;
                    }}
                />

                <button onClick={this.addTodo}>add todo</button>

                <List
                    items={this.props.todos}
                    removeItem={this.removeTodo}
                    toggleTodo={this.toggleTodo}/>
            </div>
        );
    }
}

export default connect((state) => ({
    todos: state.todos
}))(Todos);