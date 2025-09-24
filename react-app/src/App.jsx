import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import MLP from "./components/MLP";
import SantasCrew from "./components/SantasCrew";
import './function.js'

export default class App extends React.Component{
  render(){
    return(
      <div id="center">
        <title>Ponies</title>
      <header>
        <NavBar/>
      </header>
      <main>
        <section id="ponies" aria-label="My Little Ponies Cards">
          <MLP/>
        </section>
        <section id="santa" aria-label="Santa's Crew Cards" hidden>
          <SantasCrew/>
        </section>
      </main>
      </div>
    )
  }
}