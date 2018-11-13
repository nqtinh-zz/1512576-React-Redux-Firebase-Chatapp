
import * as Status from './actiontype';
export const signIn = () =>{
    return(dispatch, getSate,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signInWithPopup(firebase.auth().GoogleAuthProvider())
            .then(()=>{
                dispatch({type: Status.LOGIN})
            })
            .catch((err)=>{
                dispatch({type: Status.LOGIN_ERROR});
            }); 
    };
};

export const signOut = () =>{
    return{
        type: Status.LOGOUT,
            
    }
};