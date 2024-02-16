import './CardStyle.css';
import React from 'react';


export default function Card ({item, numb}) {

    const [isOpen, setIsOpen] = React.useState(false);
    const [isTapped, setIsTapped] = React.useState(false);

    return (
        isOpen ?
            (isTapped ?
                <div className="card open">
                    <div className="questionText">{item.answer}</div>
                </div>:
                <div className="card open">
                    <div className="questionText">{item.question}</div>
                    <ion-icon onClick={() => setIsTapped(!isTapped)} class="arrow" name="arrow-redo-outline"></ion-icon>
                </div>
            ):
                <div className="card">
                    <p>Question {numb}</p>
                    <ion-icon onClick={() => setIsOpen(!isOpen)} class="play" name="play-outline"></ion-icon>
                </div>
       
    );
}   