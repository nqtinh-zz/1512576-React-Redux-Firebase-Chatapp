import * as Status from '../action/actiontype';
var initialMessage = false;
const sendingMessage = (state = initialMessage, action) =>{
    switch (action.type) {
        case Status.SENDING_MESSAGE:
            state = !state;
            return {...state};

            default:
            return {...state};
    }
};

export default sendingMessage;
