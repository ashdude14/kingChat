import React, { useEffect, useState, useRef } from 'react';

const Test: React.FC = () => {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
 
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoRef2 = useRef<HTMLVideoElement | null>(null);
  const [peerConnection, setPeerConnection] = useState<RTCPeerConnection | null>(null);

  const init = async (): Promise<void> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      setLocalStream(stream);
      // createOffer(); // You might want to initiate the offer based on some user action
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  const createOffer = async (): Promise<void> => {
    const peer = new RTCPeerConnection();
    const RemoteStream = new MediaStream(); // Unused variable
 
    try {
      const offer = await peer.createOffer();
      await peer.setLocalDescription(offer);
      setPeerConnection(peer);
      console.log(peerConnection);
      console.log('offer : ', offer);
    } catch (error) {
      console.log('There is an error in Offer', error);
    }
  };

  useEffect(() => {
    init();
    if (localStream && videoRef.current) {
      videoRef.current.srcObject = localStream;
    }
  }, [localStream, RemoteStream]);

  useEffect(() => {
    if (RemoteStream && videoRef2.current) {
      videoRef2.current.srcObject = RemoteStream;
    }
  }, [RemoteStream]);

  return (
    <div className="flex gap-4 h-[400px] w-full">
      <div className="bg-black w-full h-full" id='user-1'>
        <video autoPlay playsInline className="w-full h-full" ref={videoRef}></video>
      </div>
      <div className="bg-black w-full h-full" id="user-2">
        <video autoPlay playsInline className="w-full h-full" ref={videoRef2}></video>
      </div>
    </div>
  );
};

export default Test;
