import React, {Component} from 'react'

class DetailsPostView extends Component{
    render(){
        return(
            <div className="post-details">
                <div id="PostBox">
                    <h2>{this.props.title}</h2>
                    <div id="PostText">{this.props.body}</div>
                    <div>Posted by {this.props.author} on {this.props.date}</div>
                </div>
                <div id="CommentBox">
                    
                </div>
            </div>
        )
    }
   
}

export default DetailsPostView;