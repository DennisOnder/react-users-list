import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../Global.css';
import Sidebar from './Sidebar';

class Users extends Component {
    
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            this.setState({
                users: json
            })
        })
    }

    render() {
        return(
            <div>
                <Sidebar />
                <div id="container">
                    <h1>Users</h1>
                    <div id="content">
                        <ul>
                            {
                            this.state.users.map((user, index) => {
                                return (
                                    <li key={user.id} id={`user${index}`}>
                                        <Link to={`/details/${user.id}`}>{user.name}</Link>
                                    <ul>
                                     <li>
                                        {user.email}
                                    </li>
                                    <li>
                                        <a href="/">{user.website}</a>
                                    </li>
                                    </ul>
                                    </li>
                                )
                              })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users;
