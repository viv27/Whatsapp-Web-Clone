import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton,} from "@material-ui/core"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat'
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
                <div className="sidebar__searchContiner">

                
                <SearchOutlinedIcon/>
                <input type="text" placeholder="Search or start a new chat" name="" id=""/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                <SidebarChat/>
                <SidebarChat/>
                
            </div>
            
        </div>
    )
}

export default Sidebar
