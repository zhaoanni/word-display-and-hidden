
import './App.css';
import React, { useState, useEffect,  } from 'react';
import { ChildComponent } from './childComponent';
import { DisplayChild } from './displayChild';

function App() {
  const [words, setWords] = useState('')
  const handleWordromChild = (message) => {
    setWords(message)
  }
  const [display, setIsDisplay] = useState(true)
  const handleClick = () => {
    // useEffect(()=>{
    //   setTimeout(()=>{setIsDisplay(!display)},2000)
    // },[display])
    setTimeout(()=>{setIsDisplay(!display)},2000)
   }
  let toggleWords
  { display ? toggleWords = 'hidden' : toggleWords = 'show' }
  return (
    <div className="App">
      <ChildComponent sendWordToParent={handleWordromChild} />
      <button onClick={handleClick } className="btn" >{toggleWords}</button>
      {display && <DisplayChild words={words} />}
    </div>
  );
}

export default App;
