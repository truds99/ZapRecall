import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from './MainMenu/MainMenu';
import Content from './Content/Content';
import '../reset.css';
import { useState, useEffect } from 'react';

const deckPTBR = [
  {
    question: 'O que é JSX?',
    answer: 'Uma extensão de linguagem do JavaScript.'
  },
  {
    question: 'Usamos props para:',
    answer: 'Passar diferentes informações para componentes.'
  },
  {
    question: 'Usamos estado (state) para:',
    answer: 'Renderizar informações atualizadas.'
  },
  {
    question: 'Usamos o npm para:',
    answer: 'Gerenciar os pacotes necessários e suas dependências.'
  },
  {
    question: 'O React é',
    answer: 'Uma biblioteca JavaScript para construção de interfaces.'
  },
  {
    question: 'Componentes devem iniciar com',
    answer: 'Letra maiúscula.'
  },
  {
    question: 'Podemos colocar ____ dentro do JSX',
    answer: 'Expressões'
  },
  {
    question: 'O que são hooks no React?',
    answer: 'Funções que permitem o uso de estados e outros recursos em componentes funcionais.'
  }
];

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

const decks = [deckPTBR, deckEn];
let selectedDeck;


function App() {

  const [validValue, setValidValue] = useState('');
  const [validDeck, setValidDeck] = useState('');

  
  useEffect (() => {
    if(validDeck === "deckPTBR") {
      selectedDeck = decks[0];
      selectedDeck.sort(() => Math.random() - 0.5);
    }
    else if (validDeck === "deckEn") {
      selectedDeck = decks[1];
      selectedDeck.sort(() => Math.random() - 0.5);
    }
  }, [validDeck])


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainMenu setValidValue={setValidValue} setValidDeck={setValidDeck}/>}/>
          <Route path='/content' element={<Content validValue={validValue} decks={decks} selectedDeck={selectedDeck} setValidValue={setValidValue} validDeck={validDeck} setValidDeck={setValidDeck}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
