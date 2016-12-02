import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import HomeView from './Views/HomeView';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';
import PostsView from './Views/PostsView';
import CreatePostView from './Views/CreatePostView';
import EditPostView from './Views/EditPostView'
import DeletePostView from './Views/DeletePostView'

import $ from 'jquery';
import KinveyRequester from './KinveyRequester'

class App extends Component {
    
    constructor(props){
        super(props);
        this.state={
            username:sessionStorage.getItem('username'),
            userId:sessionStorage.getItem('userId')
        }
    }

    componentDidMount(){
        $(document).on({
            ajaxStart:function(){$('#loadingBox').show()},
            ajaxStop:function(){$('#loadingBox').hide()}
        });
        $(document).ajaxError(this.handleAjaxError.bind(this));

        $('#errorBox').on('click',function(){$(this).hide()});
        $('#infoBox').on('click',function(){$(this).hide()});

        this.showHomeView()
    }

    render() {
      return (
        <div className="App">
          <header>
            <NavigationBar
                username={this.state.username}
                homeClicked={this.showHomeView.bind(this)}
                loginClicked={this.showLoginView.bind(this)}
                registerClicked={this.showRegisterView.bind(this)}
                postsClicked={this.showPostsView.bind(this)}
                createPostClicked={this.showCreatePostView.bind(this)}
                logoutClicked={this.logout.bind(this)}
            />
            <div id="loadingBox">Loading...</div>
            <div id="errorBox">Error msg</div>
            <div id="infoBox">Info msg</div>
          </header>
          <div id="main"></div>
          <Footer />
        </div>
      );
    }
    handleAjaxError(event,response){
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);

    }
    showInfo(message) {
        $('#infoBox').text(message).show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg).show();
    }

    showView(reactComponent){
        ReactDOM.render(
            reactComponent,
            document.getElementById('main')
        );
        $('#errorBox').hide();

    }


    showHomeView(){
        this.showView(<HomeView username={this.state.username} />)
    }
    showLoginView(){
        this.showView(<LoginView onsubmit={this.login.bind(this)}/>)
    }
    showRegisterView(){
        this.showView(<RegisterView onsubmit={this.register.bind(this)}/>)
    }
    showPostsView(){
        KinveyRequester.loadPosts()
            .then(loadPostsSuccess.bind(this));
        function loadPostsSuccess(posts){
            this.showInfo('Posts loaded.');
            this.showView(<PostsView
                posts={posts}
                userId={this.state.userId}
                editPostClicked={this.loadPostForEdit.bind(this)}
                deletePostClicked={this.loadPostForDelete.bind(this)}
            />)
        }
    }
    showCreatePostView(){
        this.showView(<CreatePostView onsubmit={this.createPost.bind(this)}/>)
    }

    createPost(title,author,body){
        KinveyRequester.createPost(title,author,body)
            .then(createPostSuccess.bind(this));
        function createPostSuccess() {
            this.showInfo('Post created.');
            this.showPostsView();
        }
    }

    loadPostForEdit(postId){
        KinveyRequester.findPostById(postId)
            .then(findPostById.bind(this));
        function findPostById(post){
            this.showView(<EditPostView
                postId={post._id}
                author={post.author}
                title={post.title}
                body={post.body}
                onsubmit={this.editPost.bind(this)}
            />)
        }
    }

    loadPostForDelete(postId){
        KinveyRequester.findPostById(postId)
            .then(findPostById.bind(this));
        function findPostById(post){
            this.showView(<DeletePostView
                postId={post._id}
                author={post.author}
                title={post.title}
                body={post.body}
                onsubmit={this.deletePost.bind(this)}
            />)
        }
    }

    deletePost(postId){
        KinveyRequester.deletePost(postId)
            .then(deletePostSuccess.bind(this));
        function deletePostSuccess() {
            this.showInfo('Post deleted.');
            this.showPostsView();
        }
    }
    editPost(postId,title,author,body){
        KinveyRequester.editPost(postId,title,author,body)
            .then(editPostSuccess.bind(this));
        function editPostSuccess() {
            this.showInfo('Post edited.');
            this.showPostsView();
        }
    }

    login(username,password){
        KinveyRequester.loginUser(username,password)
            .then(loginSuccess.bind(this));
        function loginSuccess(userInfo){
            this.saveAuthInSession(userInfo);
            this.showInfo('Login successful.');
            this.showPostsView();
        }
    }
    register(username,password){
        KinveyRequester.registerUser(username,password)
            .then(registerSuccess.bind(this));
        function registerSuccess(userInfo){
            this.saveAuthInSession(userInfo);
            this.showInfo('Register successful.');
            this.showPostsView();
        }
    }
    logout(){
        sessionStorage.clear();
        this.setState({
            username:null,
            userId:null
        })
        this.showInfo('Logout successful.')
        this.showHomeView();
    }
    saveAuthInSession(userInfo){
        sessionStorage.setItem('authToken',userInfo._kmd.authtoken);
        sessionStorage.setItem('userId',userInfo._id);
        sessionStorage.setItem('username',userInfo.username);

        this.setState({
            username:userInfo.username,
            userId:userInfo._id
        })
    }
    
}

export default App;