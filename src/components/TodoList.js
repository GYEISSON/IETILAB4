import React from 'react';
import {Todo} from './Todo';


export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    numberList(){
        const data = this.props.todoList;
        const listItems = data.map((todo,index) => {
            return (<li key={index}>
                {
                    <Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate} />
                }
            </li>
        )});
    }
    

    render() {

        return (  
            <ul>{this.numberList()}</ul>
        );
    }
}