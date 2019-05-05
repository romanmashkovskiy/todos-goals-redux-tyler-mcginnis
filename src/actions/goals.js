import API from 'goals-todos-api';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

const addGoal = (goal) => {
    return {
        type: ADD_GOAL,
        goal
    };
};

const removeGoal = (id) => {
    return {
        type: REMOVE_GOAL,
        id
    };
};

export const handleDeleteGoal = (goal) =>
    (dispatch) => {
        dispatch(removeGoal(goal.id));

        return API.deleteGoal(goal.id)
            .catch(() => {
                alert('Error');
                dispatch(addGoal(goal));
            })
    };

export const handleAddGoal = (name, callback) =>
    (dispatch) => {
        API.saveGoal(name)
            .then((goal) => {
                dispatch(addGoal(goal));
                callback();
            })
            .catch(() => {
                alert('Error');
            })
    };