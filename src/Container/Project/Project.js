import { React, useState } from 'react';
import ProjectCard from '../../Component/ProjectCard';
import './Project.css';
import dboardgame from '../../Assets/Images/dboargames.png';
import groupomania from '../../Assets/Images/groupomania.png';
import hottakes from '../../Assets/Images/hottakes.png';
import kanap from '../../Assets/Images/kanap.png';
import ohmyfood from '../../Assets/Images/ohmyfood.png';
import booki from '../../Assets/Images/booki.png';

export default function Project(props) {
  const allProject = [
    {
      id: 1,
      name: 'DBoardgames',
      media: [dboardgame],
      description:
        "App React permettant de trouver des jeux de sociétés via l'API Board Game Atlas et de les sauvegarder dans le localStorage. Mise en ligne avec Firebase.",
      type: 'personnel',
      skills: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/Cyprien-BM/DBoardgames',
      live: 'https://dboard-games.web.app/home',
    },
    {
      id: 2,
      name: 'Groupomania',
      media: [groupomania],
      description:
        "Réalisation fullstack d'un réseau social d'entreprise avec gestion/creation de compte, de poste, de like et de commentaire. Version live déployé sur Heroku(back), Vercel(front) et stockage des données via AWS S3",
      type: 'formation',
      skills: [
        'React',
        'Redux',
        'JavaScript',
        'CSS',
        'Node.js',
        'Express',
        'Sequelize',
        'MySQL',
      ],
      github:
        'https://github.com/Cyprien-BM/OpenCLassrooms_Projet-7_Creez-un-reseau-social-d-entreprise',
      live: 'https://cbm-groupomania.vercel.app/login',
    },
    {
      id: 3,
      name: 'Hot Takes',
      media: [hottakes],
      description:
        "Réalisation d'une API de type CRUD pour le back-end d'un site de partage et de notation de sauce piquante. Gestion des données utilisateurs et des sauces.",
      type: 'formation',
      skills: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
      github:
        'https://github.com/Cyprien-BM/OpenClassrooms_Projet-6_Creation-d-une-API-securisee-pour-une-application-d-avis-gastronomiques',
      live: '',
    },
    {
      id: 4,
      name: 'Kanap',
      media: [kanap],
      description:
        "Réalisation du code JavaScript pour la partie front-end d'un site de vente en ligne de canapé. Communication avec l'API fournis, gestion du panier via le localStorage et simulation de commande",
      type: 'formation',
      skills: ['JavaScript'],
      github:
        'https://github.com/Cyprien-BM/OpenClassrooms_Projet-5_Construisez-un-site-e-commerce-en-JavaScript',
      live: '',
    },
    {
      id: 5,
      name: 'Oh My Food',
      media: [ohmyfood],
      description:
        "Intégration responsive de la maquette d'un site de réservation de repas en ligne",
      type: 'formation',
      skills: ['HTML', 'CSS', 'SASS'],
      github:
        'https://github.com/Cyprien-BM/OpenClassrooms_Projet-3_Dynamisez-une-page-web-avec-des-animations-CSS',
      live: 'https://cyprien-bm.github.io/OpenClassrooms_Projet-3_Dynamisez-une-page-web-avec-des-animations-CSS/',
    },
    {
      id: 6,
      name: 'Booki',
      media: [booki],
      description:
        "Intégration responsive de la maquette d'un site de réservation de logement en ligne",
      type: 'formation',
      skills: ['HTML', 'CSS'],
      github:
        'https://github.com/Cyprien-BM/OpenClassrooms_Projet-2_Transformez-une-maquette-en-site-web-avec-HTML-CSS',
      live: 'https://cyprien-bm.github.io/OpenClassrooms_Projet-2_Transformez-une-maquette-en-site-web-avec-HTML-CSS/',
    },
  ];

  const [projectsToShow, setProjectsToShow] = useState(allProject);
  const [checked, setChecked] = useState({
    personnal: false,
    formation: false,
  });

  const handleCheck = (event) => {
    if (event.target.classList.contains('personnal')) {
      const newChecked = { ...checked };
      newChecked.personnal = !newChecked.personnal;
      newChecked.formation = false;
      setChecked(newChecked);
      sortProject(newChecked);
    }
    if (event.target.classList.contains('formation')) {
      const newChecked = { ...checked };
      newChecked.personnal = false;
      newChecked.formation = !newChecked.formation;
      setChecked(newChecked);
      sortProject(newChecked);
    }
  };

  const sortProject = (checked) => {
    if (checked.personnal) {
      const projectSorted = allProject.filter(
        (project) => project.type === 'personnel'
      );
      setProjectsToShow(projectSorted);
    } else if (checked.formation) {
      const projectSorted = allProject.filter(
        (project) => project.type === 'formation'
      );
      setProjectsToShow(projectSorted);
    } else {
      setProjectsToShow(allProject);
    }
  };

  return (
    <section
      className={'project ' + (!props.status ? 'hidden' : '')}
      onClick={() => props.toggleElement('project')}
    >

        <h2 className={'project__title' + (props.status ? ' left' : '')}>Projets</h2>
      <div
        className={'project__content ' + (!props.status ? 'hidden' : 'show')}
      >
        <div className='project__sort'>
          <h3>Mes projets :</h3>
          <input
            className='project__checkbox personnal'
            type='checkbox'
            id='personnal'
            checked={checked.personnal}
            onChange={(e) => handleCheck(e)}
          />
          <label className='project__checkbox-label' htmlFor='personnal'>
            Personnels
          </label>
          <input
            className='project__checkbox formation'
            type='checkbox'
            id='formation'
            checked={checked.formation}
            onChange={(e) => handleCheck(e)}
          />
          <label className='project__checkbox-label' htmlFor='formation'>
            Formation
          </label>
        </div>

        <article className='project__slide'>
          {projectsToShow.map((projectData) => (
            <ProjectCard key={projectData.id} {...projectData} />
          ))}
        </article>
      </div>
    </section>
  );
}
