import React from 'react';
import './ProjectCard.css'

export default function ProjectCard(props) {
  console.log(props);
  return (
    <div className='project-card'>
      <img src={props.media[0]} alt='' />
      <div className='project-card__data'>
        <h3><strong>{props.name}</strong></h3>
        <p>{props.description}</p>
        <a className='project-card__link' href={props.github} target='_blank'>Voir sur GitHub</a>
        <a className='project-card__link' href={props.live} target='_blank'>Voir en ligne</a>
        <ul className='skill__list'>
          {props.skills.map(skill => (<li><strong>{skill}</strong></li>))}
        </ul>
      </div>
    </div>
  );
}
