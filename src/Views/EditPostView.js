import React, {Component} from 'react'

class EditPostView extends Component{
    render(){
        return(
            <form className="edit-post-form" onSubmit={this.submitForm.bind(this)}>
                <h1>Edit Post</h1>
                <label>
                    <div>Author:</div>
                    <input type="text" name="author" required
                           defaultValue={this.props.author}
                           ref={e => this.authorField = e} disabled />
                </label>
                <label>
                    <div>Posted on:</div>
                    <input type="text" name="date" required
                           defaultValue={this.props.parseDate(this.props.date)} disabled />
                </label>
                <label>
                    <div>Title:</div>
                    <input type="text" name="title" required
                           defaultValue={this.props.title}
                           ref={e => this.titleField = e} />
                </label>
                <label>
                    <div>Body:</div>
                    <textarea name="body" rows="10"
                              defaultValue={this.props.body}
                              ref={e => this.bodyField = e} />
                </label>
                <label>
                    <div>Tags:</div>
                    <input type="text" name="tags"
                           defaultValue={(this.props.tags!=='')?this.props.tags.join(', '):''}
                           ref={e => this.tagsField = e} />
                </label>
                <div>
                    <input type="submit" value="Edit" />
                </div>
            </form>
        )
    }
    submitForm(event){
        event.preventDefault();
        this.props.onsubmit(this.props.postId,this.titleField.value,this.authorField.value,this.bodyField.value,this.props.date,this.tagsField.value)
    }
}

export default EditPostView;