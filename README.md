## kingChat- a realtime video & chat streaming plateform

## System Design & Analysis of Zoom

[Analysis of zoom with diagram](https://app.eraser.io/workspace/1VAt6dq08nA83vf4VOpa?origin=share)

## Features of kingChat
<h2> User Interface </h2>
The following includes some popular UI features present in kingChat:

1. User Management: This allows users to display general information such as a phone number and picture on their personal profiles. More complex user profiles may contain in-app purchase tools and payment integrations.


2. Contacts Management: All modern video calling apps have a contacts management feature that allows users to add, search and delete contacts.


3. Status: The status feature notifies users about the online status of other users. This can prevent users from wasting time calling people that are not currently online. From a simple online/offline status to WhatsApp’s last seen feature, status functionalities are a must-have in most cases.


4. Text Chat: Users can save time by texting instead of calling for simple questions or status updates. Furthermore, apps that combine both video and text are usually more successful.


4. Group Calls: Most office meetings have transformed into virtual meetings using the group conferencing feature. Therefore, implementing group calls is a great way to attract businesses that are focusing on maintaining operations through remote work.


5. Screen Sharing: To build upon virtual meetings, a screen sharing feature allows users to share their work during a call. Furthermore, screen sharing can increase the effectiveness of communication, especially for remote workers.


6. Push Notifications: With these, users can check for new messages or missed calls by simply sliding the notification bar on a locked screen.
## **Task Break-up!**

| Sl No. | Task                        | Status                  |
|--------|-----------------------------|-------------------------|
|   1    | Front-end      |         done          |
|   2    | WebRTC    |                         |
|   3    | Color on voice                |                         |


## **Tools/Technology Used!**


| Sl No. | Tools/Library                    | 
|--------|-----------------------------|
|   1    | ReactJS |     
|   2    | JavaScript    |                       
|   3    | Tailwind-CSS |               
|4| WebRTC |

## **To run this project locally**

  Step-1.  Clone this repo in your local machine. </br>
  Step-2.  Run `npm install`.  </br>
  Step-3   Run `npm run dev`.

 ## **Learning**

  1. Routing creation using react-router-dom.
  2. How to add div in remaining screen if some div already occupied the screen,without overflow in ***Tailwind-CSS***
     `flex flex-col` (parent div) -> div 1 -> `flex-1`(div2 for remaining space)
  3.  How does the WebRTC work .
  4. flex-wrap,  h-[${activeContent}%] 

## **Challenges**

   1. Screen share when not popped-up user profile div content should scroll.
   2. `peer-to-peer` connections for small group to share data in `WebRTC` eg- a)P2P b) Mesh Network  c) SFU . 

## **Working Strategy**
   
   1. Created Front-End UI, then
   2. Started working in Back-End.
  
 ## **Refrences** 
 
## **Getting familiar with WEbRTC**

Go through the readme file provided by documentation 
[see this->]().
</br> `webrtc.txt` file is also being attached in the same diroctory. 


[ How does WebRTC work?](https://medium.com/agora-io/how-does-webrtc-work-996748603141#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ4YTYzYmM0NzY3Zjg1NTBhNTMyZGM2MzBjZjdlYjQ5ZmYzOTdlN2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDQxMDc4MjE5MjU3OTQzNzkxNDYiLCJlbWFpbCI6ImFzaGlzaC5rdW1hci5zaW5naC5qZWVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5iZiI6MTcwNjA5ODYxOCwibmFtZSI6IkFzaGlzaCBLdW1hciIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLYkZrc1NEbUZYOXNZdGVOR2FpSTBrVXZnTWsxNXpiM3lZTnFrWUhBVzFLUk09czk2LWMiLCJnaXZlbl9uYW1lIjoiQXNoaXNoIiwiZmFtaWx5X25hbWUiOiJLdW1hciIsImxvY2FsZSI6ImVuLUdCIiwiaWF0IjoxNzA2MDk4OTE4LCJleHAiOjE3MDYxMDI1MTgsImp0aSI6IjhhNTU5OTI3NDBiY2VkNTZmZTZlM2I3NDEwZTMyODAyMDUyMmU0MGIifQ.bL5qXLgpRsXheAoNWNcE4INtqSEMqRhoFf5r1pVPxV-8Dwlv1LgYwKshrcYlhTBenupQTqk92EhfXqYfqn3YIz50kF3NVigSSIreWqKzPRA02YFWKsYjnol-7zCxP4qpqg2jPj1am4o9c6uYyHcDdYT6N3CDcA29CS1FzrTnGjFeAdmMDBiZMBPDti6d-4bTClphAhkSYmDCtzNWVCUQBdWuJMVJHleCsZaMHm7RGj4K36k8_YHVinR8s5I0eOvTx9DyqSXvgGilZrTqFFyOFReM3rby3iALUP5Gu57R8158WGziyg5gezL8ncc5bJQgeUU4NtBv_b8yuTiaCc_31w )

What are STUN, TURN, and ICE?
![ICE-STUN-TURN](webrtc1.webp)