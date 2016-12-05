import React, {Component} from 'react'

class DetailsUserView extends Component{
    render(){
        return(
            <div className="user-details">
                <div id="UserBox">
                    <h2>{this.props.username}</h2>
                    <div id="firstNameDetails">{this.props.firstName}</div>
                    <div id="lastNameDetails">{this.props.lastName}</div>
                    <div>Posts created by {this.props.username}:</div>
                </div>
                <div id="PostsBoxDetails">

                </div>
            </div>
        )
    }

}

export default DetailsUserView;