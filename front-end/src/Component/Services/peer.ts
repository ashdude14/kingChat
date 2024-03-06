class Peer {
  peer: RTCPeerConnection | null;

  constructor() {
    this.peer = null;
    try {
      this.peer = new RTCPeerConnection({
        iceServers: [
          {
            urls: [
              "stun:stun.l.google.com:19302",
              "stun:global.stun.twilio.com:3478",
            ],
          },
        ],
      });
    } catch (error) {
      console.error("Error initializing RTCPeerConnection:", error);
    }
  }

  async getOffer() {
    if (this.peer) {
      try {
        const offer = await this.peer.createOffer();
        // Handle the offer here
        await this.peer.setLocalDescription(new RTCSessionDescription(offer));
        return offer; // Return the offer generated
      } catch (error) {
        console.error("Error creating offer:", error);
      }
    } else {
      console.error("Peer connection not initialized.");
    }
  }
  async getAnswer(offer: RTCSessionDescriptionInit) {
    if (this.peer) {
      await this.peer.setRemoteDescription(offer);
      const answer = await this.peer.createAnswer();
      await this.peer.setLocalDescription(new RTCSessionDescription(answer))
      return answer;
    }
  }

  async setLocalDesc(ans: RTCSessionDescriptionInit) {
    if (this.peer) {
      await this.peer.setRemoteDescription(new RTCSessionDescription(ans));
    }
  }
}

export default new Peer();
