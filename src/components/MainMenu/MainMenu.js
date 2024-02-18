import logo from '../../assets/logo.png';
import './MainMenuStyle.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';



export default function MainMenu({ setValidValue }) {

const [goalsIsValid, setGoalsIsValid] = useState(false);
const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if(goalsIsValid){
        setValidValue(inputValue);
    }
  },[inputValue])

  function handleChange(event) {
    const enteredValue = event.target.value;
    setInputValue((prevValue) => {
        setInputValue(enteredValue);
        setGoalsIsValid(enteredValue > 0 && enteredValue < 5 && enteredValue % 1 === 0);
        return enteredValue;
    });
  }

  return (
    <div className='mainMenu'>
      <img src={logo} alt="Logo" />
      <h1>ZapRecall</h1>
      <input className={`goals`} type='text' placeholder='hits target (1 to 4)' onChange={handleChange}></input>
      <Link to={goalsIsValid ? '/content' : undefined} className={`startRecall ${goalsIsValid}`}>
        Start Recall!
      </Link>
    </div>
  );

    
}
