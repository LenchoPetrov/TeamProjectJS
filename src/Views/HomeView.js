import React from 'react'

function HomeView(props){
    return (
        <div className="home-view">
            <h1>Welcome to home</h1>
            <p>Welcome to the blog</p>
            {(props.username)?<p>Welcome, {props.username}</p>:<p>No user logged</p>}
        </div>
    )
}

export default HomeView;