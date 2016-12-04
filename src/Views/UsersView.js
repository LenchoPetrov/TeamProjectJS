import React, {Component} from 'react'

export default class UserView extends Component {
    render() {
        let that=this;
        let userRows = this.props.users.map(user =>
            <tr key={user._id}>
                <td><a href="#" onClick={this.props.userProfileClicked}>{user.username}</a></td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
            </tr>
        );

        return (
            <div className="user-view">
                <h1>Users</h1>
                <table className="users-table">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userRows}
                    </tbody>
                </table>
            </div>
        );
    }

    /*getActions(post, userId) {
        if (post._acl.creator === userId)
            return (
                <td>
                    <input type="button" value="Edit"
                           onClick={this.props.editPostClicked.bind(this, post._id)} />
                    &nbsp;
                    <input type="button" value="Delete"
                           onClick={this.props.deletePostClicked.bind(this, post._id)} />
                    &nbsp;
                    <input type="button" value="Details"
                           onClick={this.props.getDetailsPostClicked.bind(this, post._id)} />
                </td>
            );
        else
            return <td> <input type="button" value="Details"
                               onClick={this.props.getDetailsPostClicked.bind(this, post._id)} /></td>;
    }*/
}

