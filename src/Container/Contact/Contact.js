import React from 'react';
import './Contact.css'

export default function Contact(props) {
  return (
    <section
      className={'contact ' + (!props.status ? 'hidden' : '')}
      onClick={() => props.toggleElement('contact')}
      style={{
        height: props.status ? `${window.innerHeight - 3 * 44}px` : '40px',
      }}
    >
      <div
        className='contact__title--container'
        style={{ width: props.status ? '0' : '100%' }}
      >
        <h2 className='content__title'>Contact</h2>
      </div>
      <div className='content'>
        <h3>Contactez-moi</h3>
      </div>
    </section>
  )
}
