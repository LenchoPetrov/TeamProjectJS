import React, {Component} from 'react'

<<<<<<< HEAD
class DetailsUserView extends Component {
    render() {
        let postRows = this.props.posts.map(post =>
                <a key={post._id} href="#" className="users-click post-user-back" onClick={this.props.getDetailsPostClicked.bind(this, post._id)}>{post.title}</a>
    );
        console.log(this.props);
        let username = this.props.username;
        let firstName = this.props.firstName;
        let lastName = this.props.lastName;
        let image = this.props.image;
        if(image==undefined){
            image = "http://www.therealtyclub.com/public/images/realty_club/no_logo.svg";
        }
        console.log(username);
        console.log(firstName);
        console.log(lastName);
        console.log(image);

        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1">
                        <div className="col-md-offset-0 col-sm-offset-1 col-md-10 col-sm-6">
                            <div className="card-container">
                                <div className="card">
                                    <div className="front">
                                        <div className="cover">
                                            <img src="http://i.imgur.com/8CkzoaL.png"/>
                                        </div>
                                        <div className="user">
                                            <img className="img-circle" src={image}/>
                                        </div>
                                        <div className="content text-center">
                                            <div className="main">
                                                <h3 className="name">{username}</h3>
                                                <h5><i className="fa fa-map-marker fa-fw text-muted"></i>Place
                                                </h5>
                                                <h5><i className="fa fa-building-o fa-fw text-muted"></i>{firstName} {lastName}</h5>
                                                <h5><i className="fa fa-envelope-o fa-fw text-muted"></i>
                                                    some mail</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="back">
                                        <div className="header">
                                            <h2 className="motto">Posts</h2>
                                        </div>
                                        <div className="content">
                                            <div className="main">
                                                <h4 className="text-center">{postRows}</h4>
                                                <p>editBtn</p>
                                            </div>
                                        </div>
                                        <div className="footer">
                                            <div className="social-links text-center">
                                                <a href="" className="facebook"><i
                                                    className="fa fa-facebook fa-fw"></i></a>
                                                <a href=""
                                                   className="google"><i className="fa fa-google-plus fa-fw"></i></a>
                                                <a href="" className="twitter"><i
                                                    className="fa fa-twitter fa-fw"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
=======
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
                    <div id="firstNameDetails">{this.props.firstName}</div>
                    <div id="lastNameDetails">{this.props.lastName}</div>
                    <div>Posts created by {this.props.username}:</div>
                </div>
                <div id="PostsBoxDetails">
                    <div id="firstNameDetails">First name: {this.props.firstName}</div>
                    <div id="lastNameDetails">Last name: {this.props.lastName}</div>
                    <p></p>
                    <div>Posts created by {this.props.username}:</div>
                </div>
                <div id="PostsBoxDetails" className="boxDetails">
                        <div>{postRows}</div>
>>>>>>> origin/master
                </div>
            </div>

        )
    }

}
export default DetailsUserView;

