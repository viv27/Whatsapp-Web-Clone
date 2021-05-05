import React from 'react'
import {Avatar, IconButton} from "@material-ui/core"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons/SearchOutlined'; 
import SearchIcon from '@material-ui/icons/Search';
import SidebarChats from './SidebarChat'
import './Sidebar.css'

function Sidebar() {
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
                <SidebarChats/>
                <SidebarChats/>

            </div>
            
        </div>
    )
}

export default Sidebar
