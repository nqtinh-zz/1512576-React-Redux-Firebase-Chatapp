import React,{Component} from 'react';
import {FriendChating} from './../../action/actionchating'
import  {connect} from 'react-redux'

class FriendItem extends Component {


    onClick = (userData)=>{
        this.props.onSelectFriend(userData);
    };
    render() {
        var{userData} = this.props;
        console.log(userData);
        return (
            <li className=" clearfix" onClick={() =>this.onClick(userData)}>
                <img src={userData.avatarUrl} className="avatar" alt="avatar" />
                <div className="about">
                    <div className="name">
                        {userData.displayName}
                    </div>
                    <div className="status">
                        <i className={"fa fa-circle " + this.props.icon}/>Online{this.props.text}
                    </div>
                </div>
            </li>
        );
    }
}

var mapDispatchToProps =(dispatch)=>{
    return{
        onSelectFriend: (selectedFriend)=>{dispatch(FriendChating(selectedFriend));}
    }
};
export default connect(null,mapDispatchToProps)(FriendItem);

