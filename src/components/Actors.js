import React from 'react';
import { actors } from '../data';

const Actors = () => {

  let actorDIV = actors.map(actor => {
    return(
      <div key={actor.name}>
        <h3>Name: {actor.name}</h3>
        <p>Movies:</p>
          <ul>
            {actor.movies.map((movie, i) => <li key={i}>{movie}</li>)}
          </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorDIV}
    </div>
  );
};

export default Actors;
