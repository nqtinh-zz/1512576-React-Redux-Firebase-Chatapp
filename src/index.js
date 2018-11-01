import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase';

import App from './App';


const firebaseConfig = {
	      apiKey: "AIzaSyAYwfD0_hfAXQtjogjTxzifoZTpZ6CFL_Q",
        authDomain: "dagkchatapp-1512576.com",
        databaseURL: "https://dagkchatapp-1512576.firebaseio.com",
        projectId: "dagkchatapp-1512576",
        storageBucket: "dagkchatapp-1512576.appspot.com",
        messagingSenderId: "793915567008"
}
firebase.initializeApp(firebaseConfig)

const rrfConfig = {
  userProfile: 'users',
  enableLogging: false, 
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), 
)(createStore)


const rootReducer = combineReducers({
  firebase: firebaseReducer,
})

const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)

ReactDOM.render(
	<Provider store = { store }>
		<App />
	</Provider>,
    document.getElementById('root')
);
