import './App.css';
import { useEffect, useState } from 'react';

function App() {
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

  return (
    <div className='App'>
      <div className='background'>
        <div style={boxShadowFirst} id='star'></div>
        <div style={boxShadowSecond} id='star2'></div>
        <div style={boxShadowThird} id='star3'></div>
        <h1>Cyprien BELLEMIN MENARD</h1>
      </div>
    </div>
  );
}

export default App;
