import { React, useEffect, useState } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Project from '../Project/Project';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';

export default function Home() {
  const initialStatus = {
    aboutMe: false,
    project: false,
    resume: false,
    contact: false,
  };

  const [status, setStatus] = useState(initialStatus);

  const toggleElement = (element) => {
    switch (element) {
      case 'aboutMe':
        !status.aboutMe &&
          setStatus((status) => ({
            ...initialStatus,
            aboutMe: !status.aboutMe,
          }));
        changeBackgroundYPosition(0);
        break;
      case 'project':
        !status.project &&
          setStatus((status) => ({
            ...initialStatus,
            project: !status.project,
          }));
        changeBackgroundYPosition(1);
        break;
      case 'resume':
        !status.resume &&
          setStatus((status) => ({
            ...initialStatus,
            resume: !status.resume,
          }));
        changeBackgroundYPosition(2);
        break;
      case 'contact':
        !status.contact &&
          setStatus((status) => ({
            ...initialStatus,
            contact: !status.contact,
          }));
        changeBackgroundYPosition(3);
        break;
      default:
        break;
    }
  };

  const changeBackgroundYPosition = (value) => {
    document.documentElement.style.setProperty(
      '--starYPosition',
      `calc(-${value} * (100vh / 3))`
    );
  };

  useEffect(() => {
    const newStatus = { ...status, aboutMe: true };
    setStatus(newStatus);
  }, []);

  return (
    <>
      <AboutMe toggleElement={toggleElement} status={status.aboutMe} />
      <Project toggleElement={toggleElement} status={status.project} />
      <Resume toggleElement={toggleElement} status={status.resume} />
      <Contact toggleElement={toggleElement} status={status.contact} />
    </>
  );
}
