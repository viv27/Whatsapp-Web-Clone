import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
import {useState,useEffect} from 'react'
import db from './firebase'
import { BrowserRouter } from 'react-router-dom'
import {Link} from "react-router-dom"

function SidebarChat({id,name,addNewChat}) {
    const [seed,setSeed] = useState('')
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*500))
    },[])
    const createChat =()=>{
            const roomname = prompt("Please enter name for chat")

            if(roomname){
                db.collection("rooms").add({
                    name: roomname
                })
            }
    }
    return !addNewChat?(
        <Link to ={`/rooms/${id}`}>
        
            <div className='sidebarChat'>
               <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>Last Message</p>
                </div>
            </div>
        </Link>
            
        
    ):(
        <div onClick={createChat}
         className="sidebarChat">
         <h2>Add new Chat</h2>

        </div>
    )
}

export default SidebarChat
