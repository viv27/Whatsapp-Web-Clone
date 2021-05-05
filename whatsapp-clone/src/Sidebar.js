import React,{useState,useEffect} from 'react'
import {Avatar, IconButton} from "@material-ui/core"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons/SearchOutlined'; 
import SearchIcon from '@material-ui/icons/Search';
import SidebarChats from './SidebarChat'
import './Sidebar.css'
import db from './firebase';
import SidebarChat from './SidebarChat';

function Sidebar() {

    const  [rooms,setRooms] = useState([])

    useEffect(()=>{
        db.collection('rooms').onSnapshot(snap=>(
            setRooms(snap.docs.map(doc =>({
                id:doc.id,
                data:doc.data(),
                
            })))
        ))
    },[])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>

                    <IconButton>
                        <ChatIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                    
                    
                    
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">

                <SearchIcon/>
                <input placeholder="Search or start a new Chat" type="text"/>

                </div>
                

            </div>
            <div className="sidebar__chats">
                <SidebarChats addNewChat/>
                {rooms.map(room=>(
                   <SidebarChat key ={room.id} id ={room.id} name ={room.data.name}/>
                ))}

            </div>
            
        </div>
    )
}

export default Sidebar
