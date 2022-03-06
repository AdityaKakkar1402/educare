import React from 'react'
import Header from './Header';
import gsap from 'gsap';
import MainContent from './MainContent'
function Land() {
  let timeline = gsap.timeline();
  return (
    <div className="App">
      <Header timeline= {timeline}/>
      <MainContent timeline= {timeline}/>
    </div>
  );
}

export default Land;
