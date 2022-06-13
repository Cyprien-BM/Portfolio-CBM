import { React, useState, useEffect } from 'react';
import './Background.css';

export default function Background() {
  // ------------------------------------------------------------------------------START Background code
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const [windowDimension, setWindowDimension] = useState({
    width: windowWidth,
    height: windowHeight,
  });

  const windowResize = () => {
    const newWindow = { ...windowDimension };
    newWindow.width = window.innerWidth;
    newWindow.height = window.innerHeight;
    setWindowDimension(newWindow);
  };

  const trackMouse = (e) => {
    let x = windowDimension.width - e.pageX;
    let y = windowDimension.height - e.pageY;
    document.documentElement.style.setProperty(
      '--parallax1',
      `translateX(${Math.floor(x / 30)}px) translateY(${Math.floor(y / 30)}px)`
    );
    document.documentElement.style.setProperty(
      '--parallax2',
      `translateX(${Math.floor(x / 60)}px) translateY(${Math.floor(y / 60)}px)`
    );
    document.documentElement.style.setProperty(
      '--parallax3',
      `translateX(${Math.floor(x / 90)}px) translateY(${Math.floor(y / 90)}px)`
    );
  };

  useEffect(() => {
    window.addEventListener('resize', windowResize);
    window.addEventListener('mousemove', (e) => trackMouse(e));
    return () => {
      window.removeEventListener('resize', windowResize);
      window.removeEventListener('mousemove', (e) => trackMouse(e));
    };
  }, []);

  const heightCss = windowDimension.height + 'px';

  // Randomly generate a certain numberOfStars by creating multiple box shadow
  const starsPosition = (numberOfStars, color) => {
    let boxShadow = '';
    for (let i = 0; i < numberOfStars; i++) {
      boxShadow += `${i > 0 ? ', ' : ''}
      ${Math.floor(Math.random() * windowDimension.width)}px 
      ${Math.floor(Math.random() * windowDimension.height)}px 
      ${color}`;
    }

    return boxShadow;
  };

  document.documentElement.style.setProperty(
    '--boxShadowOne',
    starsPosition(160, '#C0C0C0')
  );
  document.documentElement.style.setProperty(
    '--boxShadowSecond',
    starsPosition(60, '#D0D0D0')
  );
  document.documentElement.style.setProperty(
    '--boxShadowThird',
    starsPosition(20, '#E5E5E5')
  );
  document.documentElement.style.setProperty('--height', heightCss);
  // ------------------------------------------------------------------------------END Background code

  return (
    <>
      <div id='star'></div>
      <div id='star2'></div>
      <div id='star3'></div>
    </>
  );
}
