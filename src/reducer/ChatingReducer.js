import * as Status from '../action/actiontype';

const initialState = {};
const ChatingReducer = (state = initialState, action)=>{
    switch (action.type) {
        case Status.SELECT_FRIEND_CHAT:
            state = action.selectFriendChatting;
            return{...state};
        default:
            return state;
    }
};

export default ChatingReducer;