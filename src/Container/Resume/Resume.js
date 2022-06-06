import { React } from 'react';
import './Resume.css';
import { BsArrowUp } from 'react-icons/bs';

export default function Resume(props) {
  return (
    <section
      className={'resume ' + (!props.status ? 'hidden' : '')}
      onClick={() => props.toggleElement('resume')}
      style={{
        height: props.status ? `${window.innerHeight - 3 * 44}px` : '40px',
      }}
    >
      <div
        className='resume__title--container'
        style={{ width: props.status ? '0' : '100%' }}
      >
        <h2 className='content__title'>Mon parcour</h2>
      </div>
      <div className='content'>
        <div
          className={'resume__content ' + (!props.status ? 'hidden' : 'show')}
        >
          <div className='resume__content-txt'>
            <div className='content-txt__description'>
              <p>
                Après 6 ans d'expérience en temps que contrôleur sur{' '}
                <a
                  href='https://fr.wikipedia.org/wiki/Machine_%C3%A0_mesurer_tridimensionnelle'
                  target={'_blank'}
                  className='resume__link'
                >
                  machine à mesurer tridimensionnelle
                </a>{' '}
                pour l'industrie aéronautique et plus d'un an en temps que
                dessinateur industriel dans un bureau d'étude spécialisée dans
                la métallerie, j'ai suivi la formation de{' '}
                <strong>Développeur Web</strong> d'
                <strong>OpenClassrooms</strong> afin d'effectuer une
                reconversion professionelle dans ce domaine.
              </p>
              <br />
              <p>
                J'ai pu lors de cette formation acquérir bases du
                <strong> développemt Web </strong>au travers de mes divers{' '}
                <strong onClick={() => props.toggleElement('project')}>
                  projets.
                </strong>{' '}
                Curieux, autodidacte et motivé, je continue aujourd'hui de
                développer ces compétences avec de projets personnels ou via
                divers cours et plateformes d'apprentisage comme{' '}
                <strong>
                  <a
                    href='https://www.udemy.com/courses/search/?q=developpement+web&src=sac&kw=d%C3%A9veloppement'
                    target={'_blank'}
                    className='resume__link green'
                  >
                    Udemy
                  </a>
                </strong>
                ,{' '}
                <strong>
                  <a
                    href='https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0'
                    target={'_blank'}
                    className='resume__link green'
                  >
                    CS50
                  </a>
                </strong>
                ,{' '}
                <strong>
                  <a
                    href='https://www.freecodecamp.org/'
                    target={'_blank'}
                    className='resume__link green'
                  >
                    freeCodeCamp
                  </a>
                </strong>{' '}
                ou encore{' '}
                <strong>
                  <a
                    href='https://www.codingame.com/'
                    target={'_blank'}
                    className='resume__link green'
                  >
                    CodinGame.
                  </a>
                </strong>
              </p>
              <br />
              <p>
                Déterminé à progresser et à réussir dans ce milieu, je suis
                aujourd'hui à l'écoute d'une nouvelle opportunité
                professionelle, alors n'hésitez pas à me{' '}
                <strong onClick={() => props.toggleElement('contact')}>
                  contacter !
                </strong>
              </p>
            </div>
            <div className='content-txt__timeline'>
              <strong>
                <p>- 2022 : Développeur Web - OpenClassrooms</p>
              </strong>
              <BsArrowUp />
              <p>
                - <span className='timeline__year'>2020 à 2021</span> :
                Dessinateur Industriel
              </p>
              <BsArrowUp />
              <p>
                - <span className='timeline__year'>2014 à 2020</span> :
                Contrôleur tridimensionnel
              </p>
              <BsArrowUp />
              <p>
                - <span className='timeline__year'>2014</span> : License
                Métrologue/Qualiticien
              </p>
              <BsArrowUp />
              <p>
                - <span className='timeline__year'>2013</span> : BTS CRCI
              </p>
            </div>
          </div>
          <a href='' className='resume__download'>
            CV version imprimable
          </a>
        </div>
      </div>
    </section>
  );
}
