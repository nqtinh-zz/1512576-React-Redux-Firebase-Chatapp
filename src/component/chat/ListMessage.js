import React, {Component} from 'react';
import MessageItem from "./MessageItem";
import {getFirebase} from 'react-redux-firebase';
import {connect} from 'react-redux';
var listMessagesFirebaseURL = '';
class ListMessage extends Component {
    render() {
        var {selectFriendChatting} = this.props;
        var listMessagesItems = [];
        if(selectFriendChatting.key) {
            listMessagesFirebaseURL = 'users/' + getFirebase().auth().currentUser.uid +'/ListMessages/'+ selectFriendChatting.key;
            console.log(listMessagesFirebaseURL);
            var firebase = getFirebase();
            var ref = firebase.database().ref(listMessagesFirebaseURL).limitToLast(100);
            ref.on('value', function(snapshot) {
                if(typeof snapshot !== undefined) {
                    var listMessages = [];
                    snapshot.forEach(function (childSnapshot) {
                        var childData = childSnapshot.val();
                        var message = childData.message;
                        if(typeof  message !== "undefined") {
                            if (message.type === 'auth') {
                                message.senderName = getFirebase().auth().currentUser.displayName;
                            }
                            else {
                                message.senderName = selectFriendChatting.displayName;
                            }
                            listMessages.unshift(message);
                        }
                    });
                }
                listMessages = listMessages.sort((firstObj,secondsObj)=>{
                    return firstObj.index - secondsObj.index;
                });
                listMessagesItems = listMessages.map((message,index) =>{
                    return <MessageItem
                        key={index}
                        message={message}
                    />
                });
            });
        }
        return (
            <div className="chat-history">
                <ul>{listMessagesItems}</ul>
            </div>
        );
    }
}
var mapStateToProps = (state)=>{
    return{
        selectFriendChatting: state.selectFriendChatting,
        auth : state.firebase.auth,
        sendingMessage: state.sendingMessage,
    }
};

export default
    connect(mapStateToProps,null)(ListMessage);