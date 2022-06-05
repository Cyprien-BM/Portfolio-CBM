import { React, useState } from 'react';
import './AboutMe.css';

export default function AboutMe(props) {

  return (
    <section
      className='about-me'
      onClick={() => props.toggleElement('aboutMe')}
      style={{ height: props.status ? `${window.innerHeight - 3 * 40}px` : '40px' }}
    >
      <div
        className='about-me__title--container'
        style={{ width: props.status ? '100%' : '0' }}
      >
        <h2 className='content__title'>À propos de moi</h2>
      </div>
      <div className='content'>
        <h1>Cyprien BELLEMIN MENARD</h1>
      </div>
    </section>
  );
}
