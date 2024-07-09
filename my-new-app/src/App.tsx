import React from 'react';
import './App.css';
import HeaderComp  from './component/header';
import BodyComp from './component/body';
import FooterComp from './component/footer';


function App() {
  return (
    <div className="App">
      <HeaderComp />
      <BodyComp />
      <FooterComp />
    </div>
  );
}

export default App;
