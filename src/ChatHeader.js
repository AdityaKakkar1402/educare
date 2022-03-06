import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

const ChatHeader = ({channelName}) => {
    return (
        <div className="chatheader">
            <div className="chatheader_left">
            <h3>
                    <span className="chatheader_hash">
                        #
                    </span>
                   
                   {channelName}              
                </h3>

            </div>
            <div className="chatheader_right">
                <NotificationsIcon/> 
                <EditLocationAltIcon/>
                <PeopleAltIcon/>
               

               <div className="chatheader_search">
                   <input type="text" placeholder="Search" />
                   <SearchIcon/>
               </div>

               <SendIcon/>
               <HelpIcon/>
               

                
            </div>
            
        </div>
    )
}

export default ChatHeader
