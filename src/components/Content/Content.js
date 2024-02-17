import './ContentStyle.css';
import Card from '../Card/Card'
import logo from '../../assets/logo-pequeno.png'
import React from 'react';

const flashCards = [
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

flashCards.sort(() => Math.random() - 0.5);

export default function Content () {

  const [done, setDone] = React.useState(0);

    return (
        <div className='content'>
            <div className='title'>
                <img src={logo}/>
                <h1>ZapRecall</h1>
            </div>
            <div className='cards'>
                <Card item={flashCards[0]} key={0} numb={1} done={done} setDone={setDone}/>
                <Card item={flashCards[1]} key={1} numb={2} done={done} setDone={setDone}/>
                <Card item={flashCards[2]} key={2} numb={3} done={done} setDone={setDone}/>
                <Card item={flashCards[3]} key={3} numb={4} done={done} setDone={setDone}/>
            </div>
            <div className='bottom'>
                {done}/4 DONE
            </div>
        </div>
    )
}
