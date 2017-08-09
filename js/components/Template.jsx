import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import Clock from './Clock.jsx';
import {Form, FormControl, Button} from 'react-bootstrap';

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 31, 2017',
            newDeadline: ''
    }
}

    changeDeadline(e) {
        e.preventDefault()
        this.setState({deadline: this.state.newDeadline})
    }

    render() {

        return (
            <div className="Template">
                <div className="Template-title">Countdown to {this.state.deadline}</div>

                <Clock deadline={this.state.deadline}/>

                <Form onSubmit={(e) => this.changeDeadline(e)} inline>
                    <FormControl className="Deadline-input" placeholder='new date' onChange={event => this.setState({newDeadline: event.target.value})}/>
                    <Button onClick={(e) => this.changeDeadline(e)}>Submit</Button>
                </Form>

            </div>
        )
    }
}

export default Template;
