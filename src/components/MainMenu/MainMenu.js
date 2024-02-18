import logo from '../../assets/logo.png';
import './MainMenuStyle.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';



export default function MainMenu({ setValidValue, setValidDeck }) {

const [goalsIsValid, setGoalsIsValid] = useState(false);
const [inputValue, setInputValue] = useState('');
const [selected, setSelected] = useState('');

  useEffect(() => {
    if(goalsIsValid){
        setValidValue(inputValue);
    }
  },[inputValue])

  useEffect(() => {
    if(selected !== 'default' && selected) {
        setValidDeck(selected);
    }
  })

  
  function setOption (event) {
    setSelected((prevState) => event.target.value);
  }

  
  function handleChange(event) {
    const enteredValue = event.target.value;
    setInputValue((prevValue) => {
        setInputValue(enteredValue);
        setGoalsIsValid(enteredValue > 0 && enteredValue < 9 && enteredValue % 1 === 0);
        return enteredValue;
    });
  }

  return (
    <div className='mainMenu'>
      <img src={logo} alt="Logo" />
      <h1>ZapRecall</h1>
      <select className={(selected !== "default" && selected) ? "selected" : ''} onChange={setOption}>
        <option value="default">Select a deck</option>
        <option value="deckPTBR">PT-BR deck React</option>
        <option value="deckEn">English deck React</option>
      </select>
      <input className={`goals`} type='text' placeholder='hits target (1 to 8)' onChange={handleChange}></input>
      <Link to={goalsIsValid && selected!=="default" && selected ? '/content' : undefined} className={`startRecall ${goalsIsValid && selected!=="default" && selected}`}>
        Start Recall!
      </Link>
    </div>
  );

    
}
