import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from "./auth/Login";
import PageChat from "./component/PageChat";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSigned: true,
        };
    }
    render() {

        var {auth} = this.props;
        console.log(auth);
        var btn = auth.isEmpty? <Login/> : '';
        var pageChat= auth.isEmpty? '': <PageChat/>;
        return (
            <div>
                <div className="row">
                    <div className=" col-lg-12">
                        {pageChat}
                    </div>
                </div>
                {btn}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth,
    };
};


export default connect(mapStateToProps,null)(App);
