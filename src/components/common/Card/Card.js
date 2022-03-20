import React from 'react';
import './card.css';

const Card = ({image,title, genre, year}) => {
  return (
    <div className='card-wrapper'>
        <img className='image' src={image ?`http://image.tmdb.org/t/p/w185${image}` : '/default-movie.jpeg'} alt={title}/>
        <div>{title}</div>
        <div className='sub-section'>
            <span>{genre}</span>
            <spa>{year}</spa>
        </div>
    </div>
  )
}

export default Card