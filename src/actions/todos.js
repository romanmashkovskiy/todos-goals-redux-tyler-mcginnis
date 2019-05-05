import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo
    };
};

const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id
    };
};

const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    };
};

export const handleAddTodo = (name, callback) =>
    (dispatch) => {
        API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodo(todo));
                callback();
            })
            .catch(() => {
                alert('Error');
            })
    };

export const handleDeleteTodo = (todo) =>
    (dispatch) => {
        dispatch(removeTodo(todo.id));

        return API.deleteTodo(todo.id)
            .catch(() => {
                alert('Error');
                dispatch(addTodo(todo));
            })
    };

export const handleToggleTodo = (todo) =>
    (dispatch) => {
        dispatch(toggleTodo(todo.id));

        return API.saveTodoToggle(todo.id)
            .catch(() => {
                alert('Error');
                dispatch(toggleTodo(todo.id));
            })
    };