import React from 'react';

class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => {
                    return (
                        <li key={item.id}>
                                <span
                                    onClick={() => this.props.toggleTodo &&
                                        this.props.toggleTodo(item)}
                                    style={{textDecoration: item.completed ? 'line-through' : ''}}
                                >
                                    {item.name}
                                </span>
                            <button onClick={() => this.props.removeItem(item)}>X</button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default List;