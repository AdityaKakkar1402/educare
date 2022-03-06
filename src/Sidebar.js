import React from 'react'
import './Sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SidebarChannel from './SidebarChannel';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import Avatar from '@material-ui/core/avatar'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import  db ,{  auth } from './firebase';
import { useState,useEffect } from 'react';
function Sidebar () {
    const user=useSelector(selectUser);
    const [channels,setChannels]=useState([]);

    useEffect(()=>{
      db.collection("channels").onSnapshot((snapshot)=>
          setChannels(snapshot.docs.map((doc)=>({
              id:doc.id,
              channel:doc.data()
      }))
      ));
    },[]);

    const handleAddChannel=()=>{
        const channelName=prompt("Enter a new channel name");
        if(channelName){
            db.collection("channels").add({
                channelName:channelName,

            })
        }
    }
    return (
        <div className="sidebar">
           
            <div className="sidebar_top">
                <h3>Amitesh Kumar</h3>
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar_channels">
                <div className="sidebar_channelheader">
                    <div className="sidebar_header">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                        
                        
                    </div>
                    <AddIcon onClick={handleAddChannel} className="sidebar_addchannel"/>
                </div>
           
            <div className="sidebar_channellist">
               {
                   channels.map(({id,channel})=>(
                       
                      
                       <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
                       
                      
                   ))
               }
               
            </div>
        </div>
        <div className="sidebar_voice">
            <SignalCellularAltIcon className="sidebar_voiceIcon" fontSize="large"/>
            <div className="sidebar_voiceinfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
            </div>

            <div className="sidebarvoiceicons">
              <InfoIcon/>
              <CallIcon/>

            </div>

      
        </div>

        <div className="sidebar_profile">
            <Avatar onClick={()=>auth.signOut()} src={user.photo}/>
            <div className="sidebar_profileinfo">
                <h3>{user.displayName}</h3>
                <p>{user.uid.substring(0,5)}</p>
            </div>
        </div>
        </div>
    )
}

export default Sidebar
