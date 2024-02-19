import logo from '../../assets/logo.png';
import './MainMenuStyle.css';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';



export default function MainMenu({ setValidValue, setValidDeck }) {

  const [goalsIsValid, setGoalsIsValid] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [linkOpen, setLinkOpen] = useState(false);
  let navigate = useNavigate();
  
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && linkOpen) {
        navigate('/content');
      }
    };
  
    if (linkOpen) {
      document.addEventListener('keydown', handleKeyPress);
    }
  
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [linkOpen, navigate]);
  
    
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

  useEffect (() => {
    goalsIsValid && selected!=="default" && selected ? setLinkOpen(true) : setLinkOpen(false);
  }, [goalsIsValid, selected]);
  
  
  

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
      <Link to={linkOpen ? '/content' : undefined} className={`startRecall ${linkOpen}`}>
        Start Recall!
      </Link>
    </div>
  );
}
