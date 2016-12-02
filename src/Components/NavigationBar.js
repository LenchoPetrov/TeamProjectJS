import React, { Component } from 'react';
import './NavigationBar.css';
import $ from 'jquery';

class NavigationBar extends Component {
    render() {
        if(this.props.username==null) {
            return (
                <div className="navigation-bar">
                    <a href="#" onClick={this.props.homeClicked}>Home</a>
                    <a href="#" onClick={this.props.loginClicked}>Login</a>
                    <a href="#" onClick={this.props.registerClicked}>Register</a>
                </div>
            );
        }
        else{
            return (
                <div className="navigation-bar">
                    <a href="#" onClick={this.props.homeClicked}>Home</a>
                    <a href="#" onClick={this.props.postsClicked}>Posts</a>
                    <a href="#" onClick={this.props.createPostClicked}>Create Post</a>
                    <a href="#" onClick={this.props.logoutClicked}>Logout</a>
                    <span className="loggedInUser">
                        Welcome, {this.props.username}
                    </span>
                </div>
            );
        }
    }
}

export default NavigationBar;