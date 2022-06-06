import { React, useState } from 'react';
import ProjectCard from '../../Component/ProjectCard';
import './Project.css';

export default function Project(props) {
  const allProject = [
    {
      id: 1,
      name: 'DBoardgames',
      media: ['./dboargames.png'],
      description: 'App React permettant de trouver des jeux de sociétés via l\'API Board Game Atlas et de les sauvegarder dans le localStorage.',
      type: 'personnal',
      skills: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/Cyprien-BM/DBoardgames',
      live: 'https://dboard-games.web.app/home',
    },
  ];

  return (
    <section
      className={'project ' + (!props.status ? 'hidden' : '')}
      onClick={() => props.toggleElement('project')}
      style={{
        height: props.status ? `${window.innerHeight - 3 * 44}px` : '40px',
      }}
    >
      <div
        className='project__title--container'
        style={{ width: props.status ? '0' : '100%' }}
      >
        <h2 className='content__title'>Projet</h2>
      </div>
      <div
        className={'project__content ' + (!props.status ? 'hidden' : 'show')}
      >
        <h3>Mes projets</h3>
        {allProject.map((projectData) => (
          <ProjectCard key={projectData.id} {...projectData} />
        ))}
      </div>
    </section>
  );
}
