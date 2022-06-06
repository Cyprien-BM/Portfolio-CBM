import { React, useState } from 'react';
import './AboutMe.css';

export default function AboutMe(props) {
  return (
    <section
      className={'about-me ' + (!props.status ? 'hidden' : '')}
      onClick={() => props.toggleElement('aboutMe')}
      style={{
        height: props.status ? `${window.innerHeight - 3 * 44}px` : '40px',
      }}
    >
      <div
        className='about-me__title--container'
        style={{ width: props.status ? '0' : '100%' }}
      >
        <h2 className='content__title'>À propos de moi</h2>
      </div>
      <div className={'about-me__content ' + (!props.status ? 'hidden' : 'show')}>
        <p>Bonjour, je suis</p>
        <h1>Cyprien BELLEMIN MENARD</h1>
        <p>
          Et je suis <strong>Développeur web</strong>, intéréssé autant par le{' '}
          <strong>Front-end (JavaScript, React)</strong> que par le{' '}
          <strong>Back-end (Node.js, Express).</strong>
          <br />
          <br />
          Vous trouverez sur ce portfolio mes divers projets ainsi que mon parcours.
        </p>
      </div>
    </section>
  );
}
