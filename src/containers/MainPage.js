import React, {Component, Fragment} from 'react';
import {Form, FormGroup, Input, Label} from "reactstrap";

import axios from '../axios-api';

import {Link} from 'react-router-dom';

class MainPage extends Component {

    state = {
        originalUrl: '',
        shortUrl: ''
    };

    submitFormHandler = event => {
        event.preventDefault();

        axios.post('/links', {originalUrl: this.state.originalUrl}).then(response => {
            this.setState({shortUrl: response.data.shortUrl});
        })
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <Fragment>
                <Form onSubmit={this.submitFormHandler}>
                    <FormGroup>
                        <Label for="originalUrl">URL</Label>
                        <Input type="text" name="originalUrl" id="originalUrl" placeholder="http://namba.kg" onChange={this.inputChangeHandler} />
                    </FormGroup>
                </Form>
                    <Link to={'/' + this.state.shortUrl}>http://localhost:8000/{this.state.shortUrl}</Link>
            </Fragment>
        );
    }
}

export default MainPage;