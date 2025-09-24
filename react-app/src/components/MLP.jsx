import React from "react";
import '../App.css'

export default class MLP extends React.Component{
    render(){
        return(
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
        )
    }
}