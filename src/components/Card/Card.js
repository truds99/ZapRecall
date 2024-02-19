import './CardStyle.css';
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
            setIcons([...icons, <ion-icon key={icons.length} class={`text${isRight}`} name={isRight === "red" ? "close-circle" : isRight === "yellow" ? "help-circle" : "checkmark-circle"}></ion-icon>]);
        }
        if (isRight === 'green' || isRight === 'yellow') {
            setCountHits(countHits + 1);
        }
    }, [isAnswered, isRight]);

    return (
        isOpen ?
            (isTapped ?
                <div className="card open tapped">
                    <div className="questionText">{item.answer}</div>
                    <div className='buttons'>
                        <Button color={"red"} text={"Forgot"} done={done} setDone={setDone} isAnswered={isAnswered} setIsAnswered={setIsAnswered} isOpen={isOpen} setIsOpen={setIsOpen} isRight={isRight} setIsRight={setIsRight} />
                        <Button color={"yellow"} text={"Almost forgot"} done={done} setDone={setDone} isAnswered={isAnswered} setIsAnswered={setIsAnswered} isOpen={isOpen} setIsOpen={setIsOpen} isRight={isRight} setIsRight={setIsRight} />
                        <Button color={"green"} text={"Zap!"} done={done} setDone={setDone} isAnswered={isAnswered} setIsAnswered={setIsAnswered} isOpen={isOpen} setIsOpen={setIsOpen} isRight={isRight} setIsRight={setIsRight} />
                    </div>
                </div>:
                <div className="card open">
                    <div className="questionText">{item.question}</div>
                    <ion-icon onClick={() => setIsTapped(!isTapped)} class="arrow" name="arrow-redo-outline"></ion-icon>
                </div>
            ):
            (isAnswered ?
                <div className={`card answered text${isRight}`}>
                    <p>Question {numb}</p>
                    <ion-icon class={`text${isRight}`} name={isRight === "red" ? "close-circle" : isRight === "yellow" ? "help-circle" : "checkmark-circle"}></ion-icon>
                </div>:
                <div className="card">
                    <p>Question {numb}</p>
                    <ion-icon onClick={() => setIsOpen(!isOpen)} class="play" name="play-outline"></ion-icon>
                </div>
            )
    );
}   