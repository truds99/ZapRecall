import styled from 'styled-components';
import React from 'react';
import Button from '../Button/Button'
import { useState, useEffect } from 'react';


export default function Card 
    ({  item, 
        numb, 
        done, 
        setDone, 
        icons, 
        countHits, 
        setCountHits, 
        setIcons
    }){
    
    const [isOpen, setIsOpen] = useState(false);
    const [isTapped, setIsTapped] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isRight, setIsRight] = useState(""); 
  
    useEffect(() => {
        if (isAnswered) {
            setIcons([...icons, <ion-icon key={icons.length} class={isRight} name={isRight === "red" ? "close-circle" : isRight === "yellow" ? "help-circle" : "checkmark-circle"}></ion-icon>]);
        }
        if (isRight === 'green' || isRight === 'yellow') {
            setCountHits(countHits + 1);
        }
    }, [isAnswered, isRight]);

    return (
        <Wrapper $isAnswered={isAnswered} $isRight={isRight} $isOpen={isOpen} $isTapped={isTapped} >
            <div>{isTapped ? item.answer : item.question}</div>
            <div>
                <Button color={"red"} text={"Forgot"} done={done} setDone={setDone} isAnswered={isAnswered} setIsAnswered={setIsAnswered} isOpen={isOpen} setIsOpen={setIsOpen} isRight={isRight} setIsRight={setIsRight} />
                <Button color={"yellow"} text={"Almost forgot"} done={done} setDone={setDone} isAnswered={isAnswered} setIsAnswered={setIsAnswered} isOpen={isOpen} setIsOpen={setIsOpen} isRight={isRight} setIsRight={setIsRight} />
                <Button color={"green"} text={"Zap!"} done={done} setDone={setDone} isAnswered={isAnswered} setIsAnswered={setIsAnswered} isOpen={isOpen} setIsOpen={setIsOpen} isRight={isRight} setIsRight={setIsRight} />
            </div>
            <ion-icon onClick={() => setIsTapped(!isTapped)} name="arrow-redo-outline"></ion-icon>
            <p>Question {numb}</p>
            <ion-icon name={isRight === "red" ? "close-circle" : isRight === "yellow" ? "help-circle" : "checkmark-circle"}></ion-icon>
            <ion-icon onClick={() => setIsOpen(!isOpen)} name="play-outline"></ion-icon>
        </Wrapper>
    );
}   

const Wrapper = styled.div`
    width: 567px;
    height: ${({ $isOpen }) => $isOpen ? '160px' : '98px'};
    background-color: white;
    font-family: Recursive;
    text-align: left;
    display: flex;
    flex-direction: ${({ $isOpen, $isTapped }) => $isOpen && $isTapped ? 'column' : 'initial'};
    justify-content: space-between;
    align-items: ${({ $isOpen, $isTapped }) => $isOpen && !$isTapped ? 'flex-start' : 'center'};
    padding: 0 21.7px;
    padding-top: ${({ $isOpen }) => $isOpen ? '18px' : '0'};
    margin-bottom: 15px;
    position: relative;

    & p {
        color: ${({ $isAnswered, $isRight }) => 
            !$isAnswered ? '#333333' : 
            $isRight === 'red' ? '#FF3030' : 
            $isRight === 'green' ? '#2FBE34' : '#FF922E'
        };
        text-decoration: ${({ $isAnswered }) => $isAnswered ? 'line-through' : 'none'};
        font-size: 24px;
        font-weight: 700;
        overflow-y: hidden;
        font-family: Recursive;
        display: ${({ $isOpen }) => $isOpen ? 'none' : 'initial'};
    }

    & > :nth-child(1) {
        display: ${({ $isOpen }) => $isOpen ? 'initial' : 'none'};
        font-size: 24px;
        font-weight: 400;
        overflow-y: hidden;
        min-height: 28px;
        hyphens: auto;
        font-family: Recursive;
    }

    & > :nth-child(2) {
        display: ${({ $isTapped, $isOpen }) => $isTapped && $isOpen ? 'flex' : 'none'};
        justify-content: space-between;
        width: 100%;
        overflow: hidden;
    }

    & > :nth-child(3) {
        display: ${({ $isTapped, $isOpen }) => !$isTapped && $isOpen ? 'initial' : 'none'};
        position: absolute;
        width: 45px;
        height: 30px;
        bottom: 6px;
        right: 15px;
        color: black;
        visibility: visible;
    }

    & > :nth-child(5) {
        display: ${({ $isAnswered, $isOpen }) => $isAnswered && !$isOpen ? 'initial' : 'none'};
        color: ${({ $isRight }) =>  
            $isRight === 'red' ? '#FF3030' : 
            $isRight === 'green' ? '#2FBE34' : '#FF922E'
        };
        height: 30px;
        width: 30px;
        cursor:auto;
    }

    & > :nth-child(6) {
        display: ${({ $isAnswered, $isOpen }) => !$isAnswered && !$isOpen ? 'initial' : 'none'};
        width: 31.7px;
        height: 36.7px;
    }

    & ion-icon:hover {
        cursor: pointer;
    }

    @media (max-width: 800px) {
        
        width: 300px;
        height: ${({ $isOpen }) => $isOpen ? '130px' : '65px'};
        font-size: 16px;
        padding: 0 15px;
        padding-top: ${({ $isOpen }) => $isOpen ? '10px' : '0'};
        margin-bottom: 15px;
        max-width: 80vw;

        & > :nth-child(6) {
            width: 25px;
            height: 30px;
            margin-right: 4px;
        }

        & > :nth-child(1) {
            font-size: 15px;
            min-height: 40px;
        }

        & p {
            font-size: 16px;
        }

        & > :nth-child(3) {
            width: 39px;
            height: 24px;
            bottom: 6px;
            right: 4px;
        }

    }  
`