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
        break;
      case 'project':
        !status.project &&
          setStatus((status) => ({
            ...initialStatus,
            project: !status.project,
          }));
        break;
      case 'resume':
        !status.resume &&
          setStatus((status) => ({ ...initialStatus, resume: !status.resume }));
        break;
      case 'contact':
        !status.contact &&
          setStatus((status) => ({
            ...initialStatus,
            contact: !status.contact,
          }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const newStatus = { ...status, aboutMe: true };
    setStatus(newStatus);
  }, []);

  return (
    <>
      <AboutMe toggleElement={toggleElement} status={status.aboutMe} />
      <Project />
      <Resume />
      <Contact />
    </>
  );
}
