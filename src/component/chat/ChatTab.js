import React, { Component } from 'react';
import { connect } from 'react-redux'
import FriendChat from "./FriendChat";
import ListMessage from "./ListMessage";
import InputText from "./InputText";

class ChatTab extends Component {
    render() {
        return (
            <div className="chat">
                <FriendChat />
                <ListMessage />
                <InputText />
            </div>
        );
    }
}


var mapSateToProps = (state) => {
    return {
        selectFriendChatting: state.selectFriendChatting,
    };
};

export default connect(mapSateToProps)(ChatTab);

