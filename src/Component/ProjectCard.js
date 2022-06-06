import React from 'react';
import './ProjectCard.css';
import { v4 as uuidv4 } from 'uuid';

export default function ProjectCard(props) {
  return (
    <div className='project-card'>
      <a href={props.media[0]} target='_blank'>
        <img src={props.media[0]} alt='' />
      </a>
      <div className='project-card__data'>
        <h3>
          <strong>{props.name}</strong>
        </h3>
        <p className='project-card__description'>{props.description}</p>
        <a className='project-card__link' href={props.github} target='_blank'>
          Voir sur GitHub
        </a>
        {props.live && (
          <a className='project-card__link' href={props.live} target='_blank'>
            Voir en ligne
          </a>
        )}
        <ul className='skill__list'>
          {props.skills.map((skill, index) => (
            <li key={uuidv4()}>
              <strong>- {skill}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
