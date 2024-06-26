import logo from '../../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from 'styled-components';



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
    <Wrapper $linkOpen={linkOpen} >
      <img src={logo} alt="Logo" />
      <h1>ZapRecall</h1>
      <select className={(selected !== "default" && selected) ? "selected" : ''} onChange={setOption}>
        <option value="default">Select a deck</option>
        <option value="deckPTBR">PT-BR deck React</option>
        <option value="deckEn">English deck React</option>
      </select>
      <input type='text' placeholder='hits target (1 to 8)' onChange={handleChange}></input>
      <Link to={linkOpen ? '/content' : undefined}>
        Start Recall!
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    flex-direction: column;
    background-color: #FB6B6B;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    & img {
        width: 136px;
        height: 161px;
    }

    & h1{
        font-family: Righteous;
        font-size: 36px;
        font-weight: 400;
        text-align: center;
        color: white;
        margin: 40px 0;
        max-height: 100%;
        overflow: hidden;
    }

    input, select {
        width: 246px;
        height: 43px;
        border-radius: 5px;
        border: none;
        padding-left: 10px;
        margin-bottom: 18px;
    }

    input {
        color: #FB6B6B;
        font-family: Recursive;
        font-weight: 700;
    }

    select {
        background-color: white;
        color: #adadad;
        font-family: Recursive;
    }

    option {
        color: #FB6B6B;
    }

    select.selected{
        color: #FB6B6B;
        font-weight: 700;
    }

    input::placeholder {
        color: #6e6e6e;
        font-family: Recursive;
    }

    input:focus {
        border: none;
        outline: none;
        color: #FB6B6B;
        font-family: Recursive;
        font-weight: 700;
    }

    & a {
        width: 246px;
        height: 54px;
        border-radius: 5px;
        border: ${({ $linkOpen }) => $linkOpen ? '1px solid #d70900' : 'none'};
        box-shadow: 0px 4px 4px 0px #00000026;
        background-color: ${({ $linkOpen }) => $linkOpen ? 'white' : '#E8E8E8'};
        color: ${({ $linkOpen }) => $linkOpen ? '#d70900' : '#C0C0C0'}; 
        font-size: 18px;
        font-family: Recursive;
        font-weight: 400;
        justify-content: center;
        display: flex;
        align-items: center;
        text-decoration: none;
        cursor: ${({ $linkOpen }) => $linkOpen ? 'pointer' : 'default'}; 
    }   




`
