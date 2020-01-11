import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserDetail extends Component {
    render() {
        const {myActiveUser} = this.props
        if(!myActiveUser) {
            return <div>selectionner un utilisateur pour démarrer</div>
        }
        return (
            <div>
                <h3>{myActiveUser.name}</h3>
                <ul>
                    <li>Id : {myActiveUser.id}</li>
                    <li>Name : {myActiveUser.name}</li>
                    <li>Job : {myActiveUser.job}</li>
                    <li>Role : {myActiveUser.role}</li>
                    <li>Active : {myActiveUser.active}</li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        myActiveUser : state.activeUser
    }
}
export default connect(mapStateToProps)(UserDetail)