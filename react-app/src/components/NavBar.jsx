import React from "react";
import '../App.css'

export default class NavBar extends React.Component{
    render(){
        return(
            <div>
                <nav className="menu" role="menubar">
                  <button id="ponies-btn" className="active" role="menuitem" aria-controls="ponies" aria-selected="true">My Little Ponies</button>
                  <button id="santa-btn" role="menuitem" aria-controls="santa" aria-selected="false">Santa's Crew</button>
                </nav>
            </div>
        )
    }
}