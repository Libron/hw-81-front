import React, {Component} from 'react';
import {Button, Form, FormGroup, Input} from "reactstrap";

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
            <div style={{width: '50%', margin: '10px auto'}}>
                <h2>Shorten your link!</h2>
                <Form onSubmit={this.submitFormHandler} style={{marginBottom: '30px'}}>
                    <FormGroup>
                        <Input type="text" name="originalUrl" id="originalUrl" placeholder="http://namba.kg" onChange={this.inputChangeHandler} />
                    </FormGroup>
                    <Button type="submit" outline color="secondary">Shorten</Button>
                </Form>
                {this.state.shortUrl ? <Link to={'/' + this.state.shortUrl}>http://localhost:8000/{this.state.shortUrl}</Link> : null}
            </div>
        );
    }
}

export default MainPage;