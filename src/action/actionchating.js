import * as Status from './actiontype';

export const FriendChating = (selectedFriend)=>{
  return{
      type: Status.SELECT_FRIEND_CHAT,
      selectFriendChatting: selectedFriend,
  }
};
export const enteredTextAred = () =>{
  return{
      type: Status.SENDING_MESSAGE,
  }
};