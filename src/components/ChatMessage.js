import React from 'react';

import './ChatMessage.css';
//import ChatStream from './ChatStream.js';

function RecievedMessage(props){
    console.log(props, "xrxrxrxxrrxrrrr")
    return (
    <div className="container-recieved">
    <span className='chat-message'>
    <div className='user'>{props.user.username}</div>
    <div className='place'>
    <img className='image' src = {props.user.avatar} alt='salad' height='50px'/>
    </div>
    <span className='texts'>{props.message} </span>
   </span>
   </div>
    )
}

function SentMessage(props){
    console.log(props, "xrxrxrxxrrxrr----------rr")
    return (
    <div className='container-sent'>
    <span className='chat-message'>
    <div className='user'>{props.user.username}</div>
    <div className='place'>
    <img className='image' src = {props.user.avatar} alt='salad' height='50px'/>
    </div>
    <span className='texts-user'>{props.message} </span>
   </span>
   </div>
    )
}


function ChatMessage(props){
    console.log(props, "--------------")
    if (props.messageType === "sent") {
        return <SentMessage message={props.body} user={props.user}/>
    } else {
        return <RecievedMessage message={props.body} user={props.user}/>
    }
 
}

export default ChatMessage;