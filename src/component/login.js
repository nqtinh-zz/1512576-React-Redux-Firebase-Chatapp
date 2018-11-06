import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import GoogleButton from 'react-google-button';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
export const LoginPage = ({ firebase, auth }) => (
  <div className="abc">
    <Link to="/user">
      <GoogleButton
        onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
      ></GoogleButton>
    </Link>

    <div>
      <h2>Đồ án giữa kì</h2>
    </div>
    {
      !isLoaded(auth)
        ? <span>Loading...</span>
        : isEmpty(auth)
          ? <span>Not Authed</span>
          :
          <div>
            Login information:
          <div>{auth.email}</div>
          </div>

    }

    <br></br>
    <Button color="primary"
      onClick={() => firebase.auth().signOut().then(function () {
      })}
    >Logout</Button>
  </div>

)

LoginPage.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired
  }),
  auth: PropTypes.object
}

export default compose(
  firebaseConnect(), // withFirebase can also be used
  connect(({ firebase: { auth } }) => ({ auth }))
)(LoginPage)