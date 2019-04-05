import React, {Component} from 'react';
import {FormGroup, Input, Label} from "reactstrap";

class Form extends Component {
    state = {
        originalUrl: ''
    };

    submitHandler = event => {
        event.preventDefault();
        // this.props.submit({...this.state});
    };

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                <FormGroup>
                    <Label for="originalUrl">Enter URL to make it short:</Label>
                    <Input
                        type="text" required
                        name="originalUrl" id="originalUrl"
                        placeholder="Enter URL here"
                        value={this.state.originalUrl}
                        onChange={this.changeHandler}
                    />
                </FormGroup>
            </Form>
        );
    }
}

export default Form;