import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {RoomProvider} from "./Component/Context/RoomContext.tsx"
import {SocketProvider} from "./Component/Context/SocketProvider.tsx"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <RoomProvider>
      <SocketProvider>
    <App />
    </SocketProvider>
    </RoomProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
