import React from "react";
import './App.css';
import NavBar from "./components/NavBar";

export default class App extends React.Component{
  render(){
    return(
      <div>
      <header>
        <NavBar/>
      </header>
      <main>
        {/* TODO implement MyLittlePonies component */}
      <section id="ponies" aria-label="My Little Ponies Cards">
        <div className="cards">
            {/* TODO implement PonyCard component */}
          <article className="card">
            <h3>Twinkle Star</h3>
            <p>A playful pony who loves to paint rainbows and spread cheer wherever she trots.</p>
          </article>
          {/* apply PonyCard child component */}
          <article className="card">
            <h3>Bubblegum Breeze</h3>
            <p>Famous for blowing magical bubbles that float wishes up to the sky.</p>
          </article>
          {/* apply PonyCard child component */}
          <article className="card">
            <h3>Glitterflash</h3>
            <p>Shining with sparkles, she lights up the night with her dancing hooves.</p>
          </article>
          {/* apply PonyCard child component */}
          <article className="card">
            <h3>Minty Whisk</h3>
            <p>Likes racing through fields with a cool minty breeze following her.</p>
          </article>
          {/* apply PonyCard child component */}
          <article className="card">
            <h3>Cherry Charm</h3>
            <p>Sweet and kind, always ready to share her cherry treats with friends.</p>
          </article>
          {/* apply PonyCard child component */}
          <article className="card">
            <h3>Sunny Sprout</h3>
            <p>Bringing sunshine and growth to every flower she steps near.</p>
          </article>
          {/* apply PonyCard child component */}
          <article className="card">
            <h3>Lavender Glow</h3>
            <p>A calm pony whose scent soothes the forest creatures at dusk.</p>
          </article>
          {/* apply PonyCard child component */}
          <article className="card">
            <h3>Peach Puff</h3>
            <p>Soft as a cloud and bubbly, she loves summer picnics and laughter.</p>
          </article>
        </div>
      </section>

      {/* TODO implement SantasCrew component */}
      <section id="santa" aria-label="Santa's Crew Cards" hidden>
        <div className="cards">
            {/* apply PonyCard child component */}
          <article className="card">
            <h3>Rudolf</h3>
            <p>The bright-nosed leader who guides Santa’s sleigh through snowy skies.</p>
          </article>
          {/* apply PonyCard child component */}
          <article className="card">
            <h3>Dasher</h3>
            <p>Fast and daring, he’s always first to dash through the snowstorms.</p>
          </article>
          {/* apply PonyCard child component */}
          <article className="card">
            <h3>Dancer</h3>
            <p>Graceful and nimble, loves to twirl through the northern lights.</p>
          </article>
          {/* apply PonyCard child component */}
          <article className="card">
            <h3>Prancer</h3>
            <p>Elegant and proud, prances proudly leading Santa’s crew.</p>
          </article>
          {/* apply PonyCard child component */}
          <article className="card">
            <h3>Vixen</h3>
            <p>Sly and swift, known for clever routes and quick helps.</p>
          </article>
          {/* apply PonyCard child component */}
          <article className="card">
            <h3>Comet</h3>
            <p>Brings joy and speed with his comet-like zoom across the skies.</p>
          </article>
          {/* apply PonyCard child component */}
          <article className="card">
            <h3>Cupid</h3>
            <p>Spreads love and warmth, even on the coldest winter nights.</p>
          </article>
          {/* apply PonyCard child component */}
          <article className="card">
            <h3>Blitzen</h3>
            <p>Lightning-fast energy, always sparking fun in Santa’s workshop.</p>
          </article>
        </div>
      </section>
      </main>
      </div>
    )
  }
}