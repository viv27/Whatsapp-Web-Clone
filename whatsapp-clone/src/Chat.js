import { Avatar,IconButton } from '@material-ui/core'
import React from 'react'
import "./Chat.css"
import{useState,useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoodIcon from '@material-ui/icons/Mood';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {

    const [seed, setSeed] = useState("")
    const [input,setInput] = useState("")
    useEffect(() =>{
        setSeed(Math.floor(Math.random()*5000))
    },[]);
    const sendMessage =(e)=>{
        e.preventDefault()
        console.log("You typed",input)
        setInput("")

    }
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
              <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name">Sonny</span>
                    Hello
                    <span className="chat__timestamp">
                        3:52pm
                    </span>
              </p>
             
                

            </div>
            <div className="chat__footer">
                <MoodIcon/>
                <form action="">
                    <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message..."></input>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>


            </div>
            
        </div>
    )
}

export default Chat
