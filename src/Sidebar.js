import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import Twitter from '@mui/icons-material/Twitter'
import { Home, Search,  MailOutline, BookmarkBorderOutlined, NotificationsNone, ListAlt, PermIdentity, MoreHoriz } from '@mui/icons-material'
import { Button } from '@mui/material'

export default function Sidebar() {
    return (
        <div className="sidebar"> 
            {/* twitter icon */}
            <Twitter className="sidebar__twitterIcon"/>
               
            {/* twitter icon */}
            <SidebarOption 
                active
                Icon={<Home />}
                text={"Home"}
            />
            {/* twitter icon */}
            <SidebarOption 
                Icon={<Search />}
                text={"Search"}
            />
            {/* twitter icon */}
            <SidebarOption 
                Icon={<NotificationsNone />}
                text={"Notifications"}
            />
            {/* twitter icon */}
            <SidebarOption 
                Icon={<MailOutline/>}
                text={"Message"}
            />
            {/* twitter icon */}
            <SidebarOption 
                Icon={<BookmarkBorderOutlined />}
                text={"Bookmark"}
            />
            {/* twitter icon */}
            <SidebarOption 
                Icon={<ListAlt />}
                text={"List"}
            />
            {/* twitter icon */}
            <SidebarOption 
                Icon={<PermIdentity />}
                text={"Profile"}
            />
            {/* twitter icon */}
            <SidebarOption 
                Icon={<MoreHoriz />}
                text={"More"}
            />
            {/* tweet button icon */}
            <Button variant="outlined" className="sidebar__tweet">Tweet</Button>
        </div>
    )
}
