import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import {url} from "./request"
import  Poster  from "./Poster"
import {Data} from "./Poster"
import Banner from "./Banner"
import Navbar from "./Navbar"
import "./App.css"
function App(){



    return(
        <>
        <div className="app">
            <Navbar/>
        <Banner/>
        <br></br>
        <Data name="NETFLIX ORIGINALS" link={url.originals} islarge="true"/>
        <Data name="Trending" link={url.trending} />
        <Data name="Top Rated" link={url.toprated} />
        <Data name="Action" link={url.action} />
        <Data name="Romance" link={url.romance} />
        <Data name="Comedy" link={url.comedy} />
        <Data name="Horror" link={url.horror} />
        <Data name="Documentary" link={url.documentary} />
        </div>
      
 
        
                </>
    
    )


 
  
}
export default App ; 