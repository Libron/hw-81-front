import React, {Component} from 'react';
import Spinner from "../../components/Spinner/Spinner";
import axios from '../../axios-api';

class LinkProvider extends Component {
    componentDidMount() {
        axios.get('/links/' + this.props.match.params.shortUrl);
    }

    render() {
        return <Spinner />;
    }
}

export default LinkProvider;