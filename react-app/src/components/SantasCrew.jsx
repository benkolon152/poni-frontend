import React from "react";
import '../App.css'

export default class SantasCrew extends React.Component{
    render(){
        return(
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
        )
    }
}