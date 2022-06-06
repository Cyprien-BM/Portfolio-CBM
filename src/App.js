import './App.css';
import './ContainerAnimation.css';
import { useEffect, useState } from 'react';
import Home from './Container/Home/Home';

function App() {
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

  useEffect(() => {
    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, []);

  const heightCss = windowDimension.height + 'px';

  // Generate randomly a certain numberOfStars by creating multiple boxw shadow
  const starsPosition = (numberOfStars) => {
    let boxShadow = '';
    for (let i = 0; i < numberOfStars; i++) {
      boxShadow += `${i > 0 ? ', ' : ''}${Math.floor(
        Math.random() * windowDimension.width
      )}px ${Math.floor(Math.random() * windowDimension.height)}px #C0C0C0`;
    }

    return boxShadow;
  };

  const boxShadowFirst = {
    '--boxShadow': starsPosition(200),
    '--height': heightCss,
  };

  const boxShadowSecond = {
    '--boxShadow': starsPosition(100),
    '--height': heightCss,
  };

  const boxShadowThird = {
    '--boxShadow': starsPosition(50),
    '--height': heightCss,
  };
  // ------------------------------------------------------------------------------END Background code

  return (
    <div className='App'>
      <main className='background'>
        <div style={boxShadowFirst} id='star'></div>
        <div style={boxShadowSecond} id='star2'></div>
        <div style={boxShadowThird} id='star3'></div>
        <Home />
      </main>
    </div>
  );
}

export default App;
