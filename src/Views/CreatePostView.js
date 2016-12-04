import React, {Component} from 'react'

class CreatePostView extends Component{
    render(){
        return(
            <form className="create-post-form" onSubmit={this.submitForm.bind(this)}>
                <h1>Create Post</h1>
                <label>
                    <div>Author:</div>
                    <input type="text" name="author" required
                           defaultValue={this.props.author}
                           ref={e => this.authorField = e} disabled />
                </label>
                <label>
                    <div>Title:</div>
                    <input type="text" name="title" required
                           ref={e => this.titleField = e} />
                </label>
                <label>
                    <div>Body:</div>
                    <textarea name="body" rows="10"
                              ref={e => this.bodyField = e} />
                </label>
                <label>
                    <div>Tags:</div>
                    <input type="text" name="tags"
                           ref={e => this.tagsField = e} />
                </label>
                <div>
                    <input type="submit" value="Create" />
                </div>
            </form>
        )
    }
    submitForm(event){
        event.preventDefault();
        this.props.onsubmit(this.titleField.value,this.authorField.value,this.bodyField.value,this.tagsField.value)
    }
}

export default CreatePostView;