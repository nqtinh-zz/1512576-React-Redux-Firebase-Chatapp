import React,{Component} from 'react';
import  {connect} from 'react-redux';

class FriendChat extends Component{
    render() {
        var {selectFriendChatting} = this.props;
        return (
                <div className="chat-header clearfix">                
                    <img
                        src={selectFriendChatting.avatarUrl}
                        alt="avatar"
                        className="avatar"
                    />
                    <div className="chat-about">
                        <div className="chat-with">Chat với:  {selectFriendChatting.displayName} </div>
                    </div> 
                   
                </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        selectFriendChatting: state.selectFriendChatting,
    }
};
export default connect(mapStateToProps,null)(FriendChat);

