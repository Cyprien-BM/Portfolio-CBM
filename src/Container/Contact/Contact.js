import { React, useState, useRef } from 'react';
import './Contact.css';
import { IconContext } from 'react-icons';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import { FaMobileAlt } from 'react-icons/fa';
import { IoMdPin } from 'react-icons/io';
import emailjs from 'emailjs-com';

export default function Contact(props) {
  const formRef = useRef();

  const initialState = {
    object: '',
    name: '',
    mail: '',
    body: '',
  };

  const [email, setEmail] = useState(initialState);

  const handleInputs = (event) => {
    if (event.target.classList.contains('name')) {
      const newEmailState = { ...email, name: event.target.value };
      setEmail(newEmailState);
    } else if (event.target.classList.contains('object')) {
      const newEmailState = { ...email, object: event.target.value };
      setEmail(newEmailState);
    } else if (event.target.classList.contains('mail')) {
      const newEmailState = { ...email, mail: event.target.value };
      setEmail(newEmailState);
    } else if (event.target.classList.contains('body')) {
      const newEmailState = { ...email, body: event.target.value };
      setEmail(newEmailState);
    }
  };

  const sendEmail = (event) => {
    console.log('ici');
    event.preventDefault();

    emailjs
      .sendForm(
        'service_kjb2p1e',
        'template_rszdacu',
        formRef.current,
        'DmVGh3FkrIFoVCG3a'
      )
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

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
        <div
          className={'contact__content ' + (!props.status ? 'hidden' : 'show')}
        >
          <div className='social-network'>
            <a
              href='https://www.linkedin.com/in/cyprien-bellemin-menard-06a914141/'
              className='social-network__data'
              target={'_blank'}
            >
              <BsLinkedin style={{ color: 'greenyellow' }} />
              <span className='contact-link'>Linkedin</span>
            </a>
            <a
              href='https://github.com/Cyprien-BM'
              className='social-network__data '
              target={'_blank'}
            >
              <BsGithub style={{ color: 'greenyellow' }} />
              <span className='contact-link'>GitHub</span>
            </a>
            <div className='social-network__data'>
              <GoMail style={{ color: 'greenyellow' }} />
              belleminmenardcyprien@hotmail.fr
            </div>
            <div className='social-network__data'>
              <FaMobileAlt style={{ color: 'greenyellow' }} />
              (+33) 06.65.25.55.92
            </div>
            <div className='social-network__data'>
              <IoMdPin style={{ color: 'greenyellow' }} />
              Yvrac, Bordeaux, 33
            </div>
          </div>
          <div className='contact__form-container'>
            <h3>
              <strong>Contactez-moi</strong>
            </h3>
            <form
              onSubmit={sendEmail}
              className='contact-form'
              ref={formRef}
            >
              <label htmlFor='input-name' className='contact-form__label'>
                Nom *
              </label>
              <input
                type='text'
                required='required'
                className='contact-form__input name'
                id='input-name'
                onInput={handleInputs}
                name='name'
              />
              <label htmlFor='input-object' className='contact-form__label'>
                Objet *
              </label>
              <input
                type='text'
                required='required'
                className='contact-form__input object'
                id='input-object'
                onInput={handleInputs}
                name='objet'
              />
              <label htmlFor='input-mail' className='contact-form__label'>
                Adresse mail *
              </label>
              <input
                type='email'
                required='required'
                className='contact-form__input mail'
                id='input-mail'
                onInput={handleInputs}
                name='mail'
              />
              <label htmlFor='input-body' className='contact-form__label'>
                Message *
              </label>
              <textarea
                cols='30'
                rows='10'
                required='required'
                className='contact-form__input body'
                id='input-body'
                onInput={handleInputs}
                name='body'
              ></textarea>
            </form>
            <button className='form__send' type='submit'>
              ENVOYER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
