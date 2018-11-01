import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, } from 'react-redux-firebase'
import GoogleButton from 'react-google-button'

export const LoginPage = ({ firebase, auth }) => (
  <div className="abc">
    <GoogleButton
      onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
    >Login With Google</GoogleButton>
    <div>
      <h2>Auth</h2>
     
    </div>
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