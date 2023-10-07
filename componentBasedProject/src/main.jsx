import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App userName='Daniel' Profession='UI/UX designer' imageUrl='https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=600' />
    <App userName='Chaudhary' Profession='Farmer' imageUrl='https://images.pexels.com/photos/2385044/pexels-photo-2385044.jpeg?auto=compress&cs=tinysrgb&w=600' />
    <App userName='Shandy' Profession=' Mern developer' imageUrl='https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600' />
    <App userName='Rohan' Profession='Cyber Security' imageUrl='https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=600' />
    <App userName='Joya' Profession='Student' imageUrl='https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=600' />
    <App userName='Ronny' Profession='PhotoGrapher' imageUrl='https://images.pexels.com/photos/3136161/pexels-photo-3136161.jpeg?auto=compress&cs=tinysrgb&w=600'/>    
    </>
)
