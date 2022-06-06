import {React} from 'react';
import './Resume.css'

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
        <h3>Mon CV</h3>
      </div>
    </section>
  )
}
