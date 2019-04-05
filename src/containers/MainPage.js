import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Form from "../components/Form/Form";

const baseUrl = 'http://localhost:8000/';

class MainPage extends Component {
    state = {
        shortUrl: ''
    };

    submit = (link) => {
        // axios.post(baseUrl + 'links', link)
        //     .then(response => {
        //         console.log(response.data);
        //         this.setState({shortUrl: response.data.shortUrl})})
        //     .catch(error => {
        //         throw new Error(error);
        //     });
    };

    render() {
        return (
            <div>
                {/*<Form />*/}
                <h1>Hello</h1>
                <Link to="142144">
                    asdasdasd
                    {this.state.shortUrl ? baseUrl + this.state.shortUrl : null}
                </Link>
            </div>
        );
    }
}

export default MainPage;