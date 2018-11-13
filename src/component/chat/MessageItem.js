import React, {Component} from 'react';
import './../../css/chatform.css';

class MessageItem extends Component {
    render() {

        var {message} = this.props;
        var image  = message.imageurl && message.imageurl !==''? <img src={message.imageurl} className="message image-message" alt=""/> : '';
        return (<div>
                <li className="clearfix">
                    <div className={message.type !== 'auth'?   'message-data' : 'message-data align-right'}>
                        
                        <span className="message-data-name">{message.senderName}</span> <i className="fa fa-circle me"/>
                    </div>
                    <div className= {message.type !=='auth'? 'message my-message' : 'message other-message float-right'}>
                        {message.content}
                        {image}
                    </div>
                </li>
            </div>
        );
    }
}

export default MessageItem;