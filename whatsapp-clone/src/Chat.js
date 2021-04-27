import { Avatar,IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import AttachFile from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

import React,{useState,useEffect} from 'react'
import './Chat.css'

function Chat() {

    const [seed,setSeed] = useState("")
    const [input,setInput] = useState("")

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000))
    },[])
const sendMessage = (e)=>{
    e.preventDefault()
    console.log("U typed", input)
}    

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                    <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                    <AttachFile/>
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__reciever'}`}>
                    <span className="chat__name">Vivek Mohan
                    </span>
                    Hey guys
                    <span className="chat__timestamp">
                        3:52 PM
                    </span>
                </p>
                

            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form action="">
                    <input value={input} onChange={e=> setInput(e.target.value)} placeholder="Type a message" type="text"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>


            </div>
        </div>
    )
}

export default Chat
