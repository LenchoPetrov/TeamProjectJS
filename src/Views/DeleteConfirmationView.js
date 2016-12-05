import React, { Component } from 'react';

export default class DeleteConfirmationView extends Component{
    render(){
        let commentId = this.props.commentId;
        let postId=this.props.postId;
        return <div className="confirmationView">
            <h3>Do you want to delete this comment?</h3>
            <textarea className="singleCommentDiv" value={this.props.commentBody} disabled/><br/>
            <input type="button" className="commentButton" value="Yes"
                   onClick={this.props.yesClicked.bind(this,commentId,postId)}/> &nbsp;
            <input type="button" className="commentButton" value="Cancel"
                onClick={this.props.cancelClicked}/>
        </div>
    }

}
