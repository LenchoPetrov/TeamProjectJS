import React, { Component } from 'react';

export default class EditCommentView extends Component{
    render(){
        return <form className="formClass" onSubmit={this.submitForm.bind(this)}>
            <label>
                <div>Comment:</div>
                <textarea name="body" rows="3" defaultValue={this.props.commentBody}
                          ref={e => this.commentField = e} />
            </label>
            <div>
                <input type="submit" value="Edit" />
            </div>
        </form>
    }
    submitForm(event){
        event.preventDefault();
        this.props.onsubmit(this.props.commentId,this.commentField.value,this.props.postId,this.props.date);
    }
}