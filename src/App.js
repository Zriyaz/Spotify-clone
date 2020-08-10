import React,{useEffect,useState} from 'react';
import SpotifyWebApi from "spotify-web-api-js"
import {useDataLayerValue} from "./DataLayer"
import Login from "./Login"
import Player from "./Player"
import {getTokenFromResponse} from "./spotify"
import './App.css';




const spotify = new SpotifyWebApi()
function App() {

 const [{user, token} ,dispatch] = useDataLayerValue()

  useEffect(()=>{
    const hash = getTokenFromResponse()
    console.log(hash)
    window.location.hash = ""
    const _token = hash.access_token
    
    if(_token) {
      dispatch({
        type : 'SET_TOKEN',
        token : _token
      })
      spotify.setAccessToken(_token)

      spotify.getMe().then((user)=>{

        console.log("USER", user)
        dispatch({
          type : 'SET_USER',
          user : user
        })  
      })

      spotify.getUserPlaylists().then((playLists)=>{
        console.log("Playlist", playLists)
        dispatch({
          type : 'SET_PLAYLISTS',
          playLists,
        })
      })
    }
  },[])
  return (
    <div className="App">
      {token ? <Player spotify = {spotify}/> : <Login />} 
    </div>
  );
}

export default App;
