import './App.css';
import './ContainerAnimation.css';
import { useEffect, useState } from 'react';
import Home from './Container/Home/Home';
import Background from './Component/Background/Background';

function App() {
  return (
    <main className='App'>
      <Background />
      <Home />
    </main>
  );
}

export default App;
