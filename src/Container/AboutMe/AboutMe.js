import { React } from 'react';
import './AboutMe.css';

export default function AboutMe(props) {
  return (
    <section
      className={'about-me ' + (!props.status ? 'hidden' : '')}
      onClick={() => props.toggleElement('aboutMe')}
    >
      <h2 className={'about-me__title' + (props.status ? ' left' : '')}>
        À propos de moi
      </h2>
      <div
        className={'about-me__content ' + (!props.status ? 'hidden' : 'show')}
      >
        <p>Bonjour, je suis</p>
        <h1>Cyprien BELLEMIN MENARD</h1>
        <p>
          Et je suis <strong>Développeur web</strong>, Formé autant sur le{' '}
          <strong>Front-end (JavaScript, React)</strong> que sur le{' '}
          <strong>Back-end (Node.js, Express).</strong>
          <br />
          <br />
          Vous trouverez sur ce portfolio mes divers projets ainsi que mon
          parcours.
        </p>
      </div>
    </section>
  );
}
