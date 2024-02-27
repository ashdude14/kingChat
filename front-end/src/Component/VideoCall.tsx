import { useEffect, useState } from"react"
import { channelName, useClient, useMicrophoneAndCameraTracks } from "./Services/AgoraConfig";
const VideoCall = (props: { setInCall:unknown; }) => {
 const {setInCall} =props;
const [users,setUsers]=useState([]);
const [start,setStart]=useState(false);
const client=useClient();
const {ready,tracks}=useMicrophoneAndCameraTracks();
useEffect(()=>{
let init= async (name) =>{

    client.on("user-published",async (user,mediaType)=>{
        await client.subscribe(user,mediaType)
        if(mediaType==="video"){
            setUsers((prevUsers) =>{
                return [...prevUsers,user]
            });
        }
        if(mediaType==="audio"){
            user.audioTrack.play();
        }
    });
    client.on("user-unpublished",(user,mediaType))
}


},[channelName,client,ready,tracks])

}

export default VideoCall