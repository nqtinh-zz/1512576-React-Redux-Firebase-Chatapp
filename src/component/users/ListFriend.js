import React,{Component} from 'react';
import FriendItem from "./FriendItem";
import {firebaseConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';

import Search from './Search';
class ListFriend extends Component {

    render() {
        var {users} = this.props;
        var userElement = [];
        if (typeof users !== 'undefined' && users !== null){
            var authUid = this.props.firebase.auth().currentUser.uid;
            var userKeys = Object.keys(users);
            console.log(userKeys);
            var icon = 'online';
 
            for(var i = 0; i < userKeys.length; i++){
                if(userKeys[i] !== authUid) {
                    var user = users[userKeys[i]];
                    user.key = userKeys[i];
                                
                    userElement.push(
                        <FriendItem
                            key={userKeys[i]}
                            userData={user}
                            icon={icon} 
                    
                        />
                    );
                }
            }
        }      
        return (
            <div className="people-list">
                <Search/>
                <ul className="list">
                    {userElement}
                    
                </ul>
                
            </div>

        );
    }
}

var mapStateToProps = (state) =>{
  return{
      users: state.firebase.data.users,
  };
};
export default compose(firebaseConnect([
    'users',
]),connect(mapStateToProps,null))(ListFriend);

