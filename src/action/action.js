import * as Status from '../action/actiontype';

export const login = () =>{
  return{
      type: Status.LOGIN,
  };
};

export const logout = () =>{
    return{
        type: Status.LOGOUT,
    };
};