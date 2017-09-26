import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/App.css';

import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
//-----> COMPONENTS
import Clock from './Clock.jsx';
import Hourglass from './Hourglass.jsx';
import Footer from './Footer.jsx';

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 31, 2017',
            newDeadline: '',
            formOk: true
    }
}

    changeDeadline(e) {
        e.preventDefault()
        const checkDateInput = Date.parse(this.state.newDeadline);
        if(isNaN(checkDateInput) == false) {
            this.setState({
                deadline: this.state.newDeadline,
                formOk: true
            });
        } else {
            console.log("Invalid date input");
            this.setState({
                formOk: false
            });
        }
    }

    render() {
        const { deadline, formOk } = this.state;
        return (
            <div className="Template">
                <Hourglass />
                <div className="Template-title">Countdown to <span>{deadline}</span></div>

                <Clock deadline={deadline}/>

                <Form onSubmit={(e) => this.changeDeadline(e)} inline>
                    <p className="Form-title">Enter your deadline</p>
                    {
                        !formOk ? <p style={{fontSize: "12px", color: "navy"}}>Please enter a valid date in the following format: Month Day, Year</p> : ''
                    }
                    <FormControl className="Deadline-input" placeholder='December 31, 2017' onChange={event => this.setState({newDeadline: event.target.value})}/>
                    <Button onClick={(e) => this.changeDeadline(e)}>Submit</Button>
                </Form>
                <Footer />
            </div>
        )
    }
}

export default Template;
