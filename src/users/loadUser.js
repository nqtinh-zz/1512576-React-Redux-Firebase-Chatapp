import React, { Component } from "react";
import firebase from "firebase";
import { Form,Label,Input,FormGroup } from 'reactstrap';
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            chat: []
        }

    }

    componentDidMount() {


        let listuser = [];
        var query = firebase.database().ref("users").orderByChild('emailAddress');
        query.once("value")
            .then(snapshot => {
                snapshot.forEach(childSnapshot => {
                    let temp = {
                        displayName: childSnapshot.val().displayName,
                        photoURL: childSnapshot.val().avatarUrl
                    }
                    // key will be "ada" the first time and "alan" the second time
                    var key = childSnapshot.key;
                    //console.log('key:' + key);
                    // childData will be the actual contents of the child
                    var childData = childSnapshot.val();
                    //console.log(childData);
                    // childData.forEach(element=>{
                    //     console.log(element);
                    // })


                    listuser.push(temp);
                    //console.log(temp);



                });

                if (!(this.state.users.length === listuser.length))
                    this.setState({ users: listuser });

            });

        console.log('sadsa' + listuser);

        let listchat = [];
        var querychat = firebase.database().ref("messages");
        querychat.once("value")
            .then(snapshot => {
                snapshot.forEach(childSnapshot => {
                    let temp = {
                        message: childSnapshot.val().message
                    }
                    // key will be "ada" the first time and "alan" the second time
                    var key = childSnapshot.key;
                    //console.log('key:' + key);
                    // childData will be the actual contents of the child
                    var childData = childSnapshot.val();
                    //console.log(childData);
                    // childData.forEach(element=>{
                    //     console.log(element);
                    // })


                    listchat.push(temp);
                    //console.log(temp);



                });

                if (!(this.state.chat.length === listchat.length))
                    this.setState({ chat: listchat });

            });

    }

    render() {
        const { users } = this.state;
        const { chat } = this.state;

        return (
            <ul className="list">
                <h1>Danh sách người dùng</h1>
                {
                    users.map(user => (
                        <div>

                            <li className="clearfix">
                                <img
                                    src={`${user.photoURL}`}
                                    alt="avatar"
                                    style={{ width: "80px", height: "auto" }}
                                />
                                <div className="about">
                                    <div className="name">{user.displayName}</div>
                                    <div className="status">
                                        <i className="fa fa-circle online" /> online
                            </div>
                                </div>
                            </li>

                        </div>


                    ))
                }
                <h2>Chat</h2>
                {
                    chat.map(user => (
                        <div>

                            <li>
                                {user.message}
                            </li>
                        </div>


                    ))
                }
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Chat</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Nhập chat" />
                    </FormGroup>
                </Form>
            </ul>
        );
    }
}
export default Users;
