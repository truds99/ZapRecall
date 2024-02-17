import './CardStyle.css';
import React from 'react';
import Button from '../Button/Button'


export default function Card ({item, numb, done, setDone,}) {

    const [isOpen, setIsOpen] = React.useState(false);
    const [isTapped, setIsTapped] = React.useState(false);
    const [isAnswered, setIsAnswered] = React.useState(false);
    const [isRight, setIsRight] = React.useState("");
    

    return (
        isOpen ?
            (isTapped ?
                <div className="card open tapped">
                    <div className="questionText">{item.answer}</div>
                    <div className='buttons'>
                        <Button color={"red"} text={"I didn't remember"} done={done} setDone={setDone} isAnswered={isAnswered} setIsAnswered={setIsAnswered} isOpen={isOpen} setIsOpen={setIsOpen} isRight={isRight} setIsRight={setIsRight}/>
                        <Button color={"yellow"} text={"Almost didn't remember"} done={done} setDone={setDone} isAnswered={isAnswered} setIsAnswered={setIsAnswered} isOpen={isOpen} setIsOpen={setIsOpen} isRight={isRight} setIsRight={setIsRight}/>
                        <Button color={"green"} text={"Zap!"} done={done} setDone={setDone} isAnswered={isAnswered} setIsAnswered={setIsAnswered} isOpen={isOpen} setIsOpen={setIsOpen} isRight={isRight} setIsRight={setIsRight}/>
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