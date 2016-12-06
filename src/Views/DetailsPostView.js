import React, {Component} from 'react'

class DetailsPostView extends Component{
    render(){
        return(
            <div className="post-details details">
                <div className="details">
                    <h2 className="details my-form-title">{this.props.title}</h2>
                    <div id="PostText" className="my-form my-form-body">{this.props.body}</div>
                    &nbsp;
                    <div className="my-form-title">Posted by {this.props.author} on {this.props.date}</div>
                </div>
                <div id="CommentBox">
                    
                </div>
            </div>
        )
    }
   
}

export default DetailsPostView;