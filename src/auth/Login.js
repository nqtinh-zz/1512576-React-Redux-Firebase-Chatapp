import React, { Component } from 'react'
import firebase from 'firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import './../css/bootstrap.css';
import './../css/login.css';
import GoogleButton from 'react-google-button';
class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLogin: false,
      uid: '',
    }
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          const uid = user.uid;
          var lastOnlineRef = this.props.firebase.database().ref('users/' + uid + '/lastOnline');
          var myConnectionsRef = this.props.firebase.database().ref('users/' + uid + '/connection');
          var connectedRef = this.props.firebase.database().ref('.info/connected');
          connectedRef.on('value', function (snap) {
            if (snap.val() === true) {
              myConnectionsRef.set(true);
              lastOnlineRef.onDisconnect().set(firebase.database.ServerValue.TIMESTAMP);
              myConnectionsRef.onDisconnect().set(false);
            }
          });
        }
        this.setState({ isSignedIn: !!user })
      }
    );
  }

  render() {
    return (
      <div className="login">
        <h1>Sign In</h1>

        <div className="app-name">
          Chat firebase by Nguyễn Quang Tính - 1512576
        </div>
        <div className="btnlogin">
          <GoogleButton onClick={() => firebase.login({ provider: 'google', type: 'popup' })}>
            Login With Google
          </GoogleButton>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
  };
};

export default compose(firebaseConnect(), connect(mapStateToProps, null))(Login);
