import React,{Component} from 'react';
import {connect} from 'react-redux';
import {signOut} from  './../action/actionauth';
class SignOut  extends Component{

    render(){
        return(
            <div>
                <button
                    className= "justify-content-center btn btn-primary"
                    onClick={() => {this.props.signOut();}}>
                    Logout
                </button>
            </div>
        );
    }
}
var mapDispatchToProps = (dispatch) =>{
    return{
        signOut: () =>dispatch(signOut()),
    }
};

const mapStateToProps = (state,ownProps)=>{
    return{
        auth: state.firebase.auth,
    };
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(SignOut);