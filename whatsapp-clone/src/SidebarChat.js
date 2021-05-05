import { Avatar } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './SidebarChat.css'

function SidebarChat({addNewChat}) {
    const [seed, setSeed] = useState('')
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])

    const createChat=()=>{
        const roomName = prompt("Please enter a name for chat")

        if(roomName){

        }
    }
    return !addNewChat ?(
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last Message...</p>
            </div>

        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
