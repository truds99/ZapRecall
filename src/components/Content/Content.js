import './ContentStyle.css';
import Card from '../Card/Card'
import logo from '../../assets/logo-pequeno.png'
import React from 'react';
import Bottom from '../Bottom/Bottom';
import { useState, useEffect } from 'react';

const deckEn = [
  {
    question: 'What is JSX?',
    answer: 'A JavaScript language extension.'
  },
  {
    question: 'We use props to:',
    answer: 'Pass different information to components.'
  },
  {
    question: 'We use state to:',
    answer: 'Render updated information.'
  },
  {
    question: 'We use npm to:',
    answer: 'Manage necessary packages and their dependencies.'
  },
  {
    question: 'React is',
    answer: 'A JavaScript library for building interfaces.'
  },
  {
    question: 'Components should start with',
    answer: 'An uppercase letter.'
  },
  {
    question: 'We can put ____ inside JSX',
    answer: 'Expressions.'
  },
  {
    question: 'What are hooks in React?',
    answer: 'Functions that enable the use of states and other features in functional components.'
  }
];

export default function Content ({ validValue, setValidValue, selectedDeck }) {
  
  if(!selectedDeck) {
    selectedDeck = deckEn;
    selectedDeck.sort(() => Math.random() - 0.5);
  }

  useEffect (() => {
    if(!validValue) {
      setValidValue(4);
    }
  }, [validValue]);
  
  const [done, setDone] = useState(0);
  const [icons, setIcons] = useState([]);
  const [countHits, setCountHits] = useState(0);

  return (
      <div className='content'>
          <div className='title'>
              <img src={logo}/>
              <h1>ZapRecall</h1>
          </div>
          <div className='cards'>
              <Card item={selectedDeck[0]} key={0} numb={1} done={done} setDone={setDone} icons={icons} setIcons={setIcons} validValue={validValue} countHits={countHits} setCountHits={setCountHits}/>
              <Card item={selectedDeck[1]} key={1} numb={2} done={done} setDone={setDone} icons={icons} setIcons={setIcons} validValue={validValue} countHits={countHits} setCountHits={setCountHits}/>
              <Card item={selectedDeck[2]} key={2} numb={3} done={done} setDone={setDone} icons={icons} setIcons={setIcons} validValue={validValue} countHits={countHits} setCountHits={setCountHits}/>
              <Card item={selectedDeck[3]} key={3} numb={4} done={done} setDone={setDone} icons={icons} setIcons={setIcons} validValue={validValue} countHits={countHits} setCountHits={setCountHits}/>
          </div>
          <Bottom done={done} icons={icons} setDone={setDone} setIcons={setIcons} cards={selectedDeck} validValue={validValue} countHits={countHits}/>
      </div>
  )
}



