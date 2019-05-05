import React from 'react';
import {connect} from 'react-redux';

import List from './List';
import {
    handleAddGoal,
    handleDeleteGoal
} from '../actions/goals';

class Goals extends React.Component {

    addGoal = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAddGoal(this.textInput.value, () => this.textInput.value = ''));
    };

    removeGoal = (goal) => {
        this.props.dispatch(handleDeleteGoal(goal));
    };

    render() {
        return (
            <div>
                <h1>Goals list</h1>
                <input
                    type='text'
                    placeholder='add todo'
                    ref={(input) => {
                        this.textInput = input;
                    }}
                />

                <button onClick={this.addGoal}>add todo</button>

                <List items={this.props.goals} removeItem={this.removeGoal}/>
            </div>
        );
    }
}

export default connect((state) => ({
    goals: state.goals
}))(Goals);