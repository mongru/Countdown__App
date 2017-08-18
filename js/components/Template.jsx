import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/App.css';
import Clock from './Clock.jsx';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

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

        const checkDateInput = Date.parse(this.state.newDeadline);

        if(isNaN(checkDateInput) == false) {
            this.setState({deadline: this.state.newDeadline});

        } else {
            console.log("Invalid date input");
            alert("Please enter a valid date in the following format: Month Day, Year");
        }

    }

    render() {

        return (
            <div className="Template">
                <div className="Template-title">Countdown to <span>{this.state.deadline}</span></div>

                <Clock deadline={this.state.deadline}/>

                <Form onSubmit={(e) => this.changeDeadline(e)} inline>
                    <p className="Form-title">Enter your deadline</p>
                    <FormControl className="Deadline-input" placeholder='December 31, 2017' onChange={event => this.setState({newDeadline: event.target.value})}/>
                    <Button onClick={(e) => this.changeDeadline(e)}>Submit</Button>
                </Form>

            </div>
        )
    }
}

export default Template;
