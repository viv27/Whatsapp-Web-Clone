import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
import {useState,useEffect} from 'react'

function SidebarChat({addNewChat}) {
    const [seed,setSeed] = useState('')
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*500))
    },[])
    const createChat =()=>{
            const roomname = prompt("Please enter name for chat")

            if(roomname){
                
            }
    }
    return !addNewChat?(
        
            <div className='sidebarChat'>
               <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>Room Name</h2>
                    <p>Last Message</p>
                </div>
            </div>
            
        
    ):(
        <div onClick={createChat}
         className="sidebarChat">
         <h2>Add new Chat</h2>

        </div>
    )
}

export default SidebarChat
