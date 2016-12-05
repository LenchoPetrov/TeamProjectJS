import React, {Component} from 'react'

class DetailsPostView extends Component{
    render(){
        let that = this;
        let postId=this.props.postId;
        let comments = this.props.comments;
        let commentsDiv=<h2>No comments yet</h2>;
        if(comments.length>0){
            let renderedComments=comments.map(comment=>
                <div className="singleCommentDiv" key={comment._id}>
                    <div><i>{comment.body}</i></div>
                    <div className="commentDetails"><strong>Commented by</strong> <i>{comment.author}</i> <strong>on</strong> {that.props.parseDate(comment.date)}&nbsp;
                        <strong>at</strong> {that.props.getTime(comment.date)}</div>
                    {this.getButtons(comment,that.props.userId,comment._id,postId,comment.date)}
                </div>
            );
            commentsDiv=<div id="CommentsDiv">
                <h2>Comments:</h2>
                {renderedComments}
            </div>;
        }
        return(
            <div className="post-details">
                <div id="PostBox">
                    <h2>{this.props.title}</h2>
                    <div id="PostText">{this.props.body}</div>
                    <div>Posted by {this.props.author} on {this.props.date}</div>
                </div>
                <div className="buttonHolder">
                    <button className="customButton" onClick={this.props.makeCommentClicked.bind(this,postId)}>Make a comment</button>
                </div>
                <hr/>
                <div id="deleteCommentDiv"></div>
                <div id="createCommentDiv"></div>
                {commentsDiv}
            </div>
        )
    }

    //render buttons to the comments

    getButtons(comment,userId,commentId,postId,date){
        if(comment._acl.creator===userId) {
            return (<div className="commentButtonsHolder">
                <input type="button" className="commentButton" value="Edit"
                       onClick={this.props.editCommentClicked.bind(this,commentId,postId,comment.body,date)}/> &nbsp;
                <input type="button" className="commentButton" value="Delete"
                       onClick={this.props.deleteCommentClicked.bind(this,commentId,comment.body,postId)}/>
            </div>)
        }
    }

}

export default DetailsPostView;