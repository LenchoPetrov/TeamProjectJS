import React, {Component} from 'react'

class DetailsUserView extends Component{
    render(){
        let that = this;
        let postRows = this.props.posts.map(post =>
        <span>
                <div>Title: {post.title}</div>
                <div>Body: {post.body}</div>
                <div>Date: {that.props.parseDate(post.date)}</div>
        </span>
            );
        return(
            <div className="user-details">
                <div id="UserBox">
                    <h2>{this.props.username}</h2>
                    <div id="firstNameDetails">First name: {this.props.firstName}</div>
                    <div id="lastNameDetails">Last name: {this.props.lastName}</div>
                    <p></p>
                    <div>Posts created by {this.props.username}:</div>
                </div>
                <div id="PostsBoxDetails" className="boxDetails">
                        <div>{postRows}</div>
                </div>
            </div>
        )
    }

}

export default DetailsUserView;