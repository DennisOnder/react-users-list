import React, { Component } from 'react';
import Sidebar from './Sidebar';
import './../Global.css';

class Posts extends Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    posts: json
                })
            })
    }

    render() {
        return(
            <div>
                <Sidebar />
                <div id="container">
                    <h1>Posts</h1>
                    <div id="content">
                        <ul>
                        {
                            this.state.posts.map(post => {
                                return(
                                    <li key={post.id}>
                                        <a href="/">
                                            {post.title}
                                        </a>
                                        <p>
                                            {post.body}
                                        </p>
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

export default Posts;