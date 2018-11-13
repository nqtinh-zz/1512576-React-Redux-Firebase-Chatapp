import React,{Component} from 'react';
import  {connect} from 'react-redux'

import {getFirebase} from "react-redux-firebase";



function  random() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

const randomID = () =>{
    return random() + random() + '-' + random() + '-' + random() + random() + '-' + random() + '-' + random() + random() + random();
};

class InputText extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null,
            messageToSend: '',
            content: '',
        }
    }
    onChange = (event) =>{//
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value,
        });
    };

    
    onSendMessage = (databaseURL,friendDatabaseURL) =>{
        var {content} = this.state;
        if(this.state.selectedImage != null){
            const {selectedImage} = this.state;
            var storageRef = getFirebase().storage().ref('message').child('images').child(selectedImage.name);
            storageRef.put(selectedImage).then(function(snapshot){
                storageRef.getDownloadURL().then(url => {
                    getFirebase().database().ref('/persistenceValue/total')
                    .once('value').then(function(snapshot) {
                       var total = snapshot.val();
                    getFirebase().database().ref('/persistenceValue').update({
                        total: total + 1,
                    });
                    getFirebase().database().ref(databaseURL+'/' + randomID() + '/message').set({
                        index: total + 1,
                        content:content,
                       
              
                        type: 'auth'
                    });
        
                    getFirebase().database().ref(friendDatabaseURL+'/' + randomID() + '/message').set({
                        index: total + 1,
                        content:content,
                     
                     
                        type: 'friend'
                    });
                });


            });
        })
    }
    else{
        getFirebase().database().ref('/persistenceValue/total')
            .once('value').then(function(snapshot) {
            console.log('snapshot'); console.log(snapshot.val());
            var total = snapshot.val();
            getFirebase().database().ref('/persistenceValue').update({
                total: total + 1,
            });

            getFirebase().database().ref(databaseURL+'/' + randomID() + '/message').set({
                index: total + 1,
                content:content,
          
          
                type: 'auth'

            });

            getFirebase().database().ref(friendDatabaseURL+'/' + randomID() + '/message').set({
                index: total + 1,
                content:content,
  
                type: 'friend'
            });


        });
    }


    };
  
    render() {
        var {selectFriendChatting} = this.props;
        var listMessagesFirebaseURL = '';
        var listMessagesFirebaseURLForFriend= '';
        if(selectFriendChatting.key) {
            listMessagesFirebaseURL = 'users/' + getFirebase().auth().currentUser.uid + '/ListMessages/' + selectFriendChatting.key;
            listMessagesFirebaseURLForFriend = 'users/' + selectFriendChatting.key + '/ListMessages/' + getFirebase().auth().currentUser.uid ;
        }

        
        return (
            <div className="chat-message clearfix">
                <textarea name="content" id="message-to-send" placeholder="Nhập vào tin nhắn" rows={3} onChange={this.onChange} value={this.state.content} />
                <button onClick={() =>this.onSendMessage(listMessagesFirebaseURL,listMessagesFirebaseURLForFriend)}>Gửi</button>
                
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        selectFriendChatting: state.selectFriendChatting,
        firebase: state.firebase
    }
};
export default connect(mapStateToProps)(InputText);

