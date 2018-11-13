import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase';
import * as Config from './../config/config'
import isSigned from './LoginReducer'
import authReducer from './authReducer';
import selectFriendChatting from './ChatingReducer'
import sendingMessage from './MessageReducer';

if (!firebase.apps.length) {
    firebase.initializeApp(Config.config);
}
export const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, Config.rrfConfig), 
)(createStore);


export const rootReducer = combineReducers({
    firebase: firebaseReducer,
    authReducer: authReducer,
    isSigned: isSigned,
    selectFriendChatting: selectFriendChatting,
    sendingMessage : sendingMessage,
});