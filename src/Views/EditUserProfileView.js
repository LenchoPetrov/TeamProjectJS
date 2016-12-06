import React, {Component} from 'react'

class EditUserProfileView extends Component{
    render(){
        return(
            <form className="edit-user-profile-form" onSubmit={this.submitForm.bind(this)}>
                <h1>Change User Data</h1>
                <label>
                    <div>First Name:</div>
                    <input type="text" className="form-control hvr-grow" name="firstName" required
                           defaultValue={this.props.firstName}
                           ref={e => this.firstNameField = e}/>
                </label>
                <label>
                    <div>Last Name:</div>
                    <input type="text" className="form-control hvr-grow" name="lastName" required
                           defaultValue={this.props.lastName}
                           ref={e => this.lastNameField = e}/>
                </label>
                <label>
                    <div>Mail:</div>
                    <input type="text" className="form-control hvr-grow" name="mail"
                           ref={e => this.mailField = e}/>
                </label>
                <label>
                    <div>Place:</div>
                    <input type="text" className="form-control hvr-grow" name="place"
                    ref={e => this.placeField = e}/>
                </label>
                <label>
                    <div>Facebook profile:</div>
                    <input type="text" className="form-control hvr-grow" name="facebook-profile"
                           ref={e => this.facebookField = e}/>
                </label>
                <label>
                    <div>Twitter profile:</div>
                    <input type="text" className="form-control hvr-grow" name="twitter-profile"
                           ref={e => this.twitterField = e}/>
                </label>
                <label>
                    <div>Google+ profile:</div>
                    <input type="text" className="form-control hvr-grow" name="google-profile"
                           ref={e => this.googleField = e}/>
                </label>
                <div>
                    <input type="submit" className="my-btns hvr-pulse" value="Change" />
                </div>
            </form>
        )
    }
    submitForm(event){
        event.preventDefault();
        this.props.onsubmit(this.props.userId,this.firstNameField.value,this.lastNameField.value,this.mailField.value,this.placeField.value,this.facebookField.value,this.twitterField.value,this.googleField.value)
    }
}

export default EditUserProfileView;