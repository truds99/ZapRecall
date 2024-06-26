import styled from 'styled-components';
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
      setValidValue(8);
    }
  }, [validValue]);
  
  const [done, setDone] = useState(0);
  const [icons, setIcons] = useState([]);
  const [countHits, setCountHits] = useState(0);

  return (
      <Wrapper>
          <div>
              <img src={logo}/>
              <h1>ZapRecall</h1>
          </div>
          <div>
              {selectedDeck.map((elm, idx) => 
                  <Card
                    item={elm}
                    key={idx}
                    numb={idx+1} 
                    done={done} 
                    setDone={setDone} 
                    icons={icons} 
                    setIcons={setIcons} 
                    validValue={validValue} 
                    countHits={countHits} 
                    setCountHits={setCountHits}/>)
              }
          </div>
          <Bottom 
            done={done} 
            icons={icons} 
            setDone={setDone} 
            setIcons={setIcons} 
            cards={selectedDeck} 
            validValue={validValue} 
            countHits={countHits}
          />
      </Wrapper>
  )
}

const Wrapper = styled.div`
    background-color: #FB6B6B;
    height: calc(100% - 102px);
    padding: 0 38px;
    font-family: Recursive;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    margin-bottom: 20px;

    * {
        overflow-x: hidden;
        box-sizing: border-box;
    }

    & > :nth-child(1) {
        overflow-y: hidden;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 85%;
        max-width: 500px;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    & > :nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-bottom: 270px;
    }

    & h1 {
        font-size: 53px;
        overflow: hidden;
        color: white;
    }

    & > :nth-child(1) > img {
        width: 75px;
        height: 87px;
    }

    @media (max-width: 800px) {

        & > :nth-child(1) {
            margin-top: 40px;
        }

        & h1{
            font-size: 36px;
        }

        & > :nth-child(1) > img {
            width: 52px;
            height: 60px;
        }

        & > :nth-child(2) {
            margin-top: 18px;
            display: flex;
            flex-direction: column;
            margin-bottom: 270px;    
        }

    }


`



