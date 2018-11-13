import * as Status from '../action/actiontype';

export const selectedFriendChating = (selectedFriend)=>{
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