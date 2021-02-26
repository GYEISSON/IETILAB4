
import React from 'react';


export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
            <div>
                <p>Text: {this.props.text}</p> 
                <p>Priority: {this.props.priority}</p>
                <p>Time: {this.props.dueDate}</p>
            </div>
        );
    }

}

