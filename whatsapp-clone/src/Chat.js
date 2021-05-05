import { Avatar,IconButton } from '@material-ui/core'
import React from 'react'
import "./Chat.css"
import{useState,useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chat() {

    const [seed, setSeed] = useState("")
    useEffect(() =>{
        setSeed(Math.floor(Math.random()*5000))
    },[]);
    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>

                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div>
            </div>
            <div className="chat__body">
              <p className="chat__message">
                    <span className="chat__name">Sonny</span>
                    Hello
                    <span className="chat__timestamp">
                        3:52pm
                    </span>
              </p>
             
                

            </div>
            <div className="chat__footer">

            </div>
            
        </div>
    )
}

export default Chat
