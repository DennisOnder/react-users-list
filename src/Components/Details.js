import React, { Component } from 'react';
import Sidebar from './Sidebar';
import './../Global.css';
import './Details.css';

class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(res => res.json())
            .then(json => this.setState({
                user: json
            }))
    }

    render() {
        return (
            <div>
            <Sidebar />
            <div id="container">
                <h1>{this.state.user.name}</h1>
                <div id="contentDetails">
                <ul>
                    <li><strong>Username:</strong> {this.state.user.username}</li>
                    <li><strong>Email:</strong> {this.state.user.email}</li>
                    <li><strong>Password:</strong> {this.state.user.phone}</li>
                </ul>
            </div>
        </div>
    </div>
        )
    }
}

export default Details;