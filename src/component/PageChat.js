import React, { Component } from 'react'
import './../css/chatform.css'
import ChatTab from "./chat/ChatTab";
import { connect } from 'react-redux';
import ListFriend from "./users/ListFriend";
import LogOut from '../auth/LogOut';
class PageChat extends Component {
    render() {
        var { selectFriendChatting } = this.props;
        var chatBox = selectFriendChatting.key ? <ChatTab /> : '';
        return (
            <div>
                <div className="login" ><h1>1512576- Chat firebase</h1>
                    <LogOut />
                </div>
                <div className="container ">
                    <ListFriend />
                    {chatBox}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        selectFriendChatting: state.selectFriendChatting,
    }
};

export default connect(mapStateToProps, null)(PageChat);