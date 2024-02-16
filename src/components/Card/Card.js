import './CardStyle.css';
import React from 'react';
import Button from '../Button/Button'


export default function Card ({item, numb}) {

    const [isOpen, setIsOpen] = React.useState(false);
    const [isTapped, setIsTapped] = React.useState(false);

    return (
        isOpen ?
            (isTapped ?
                <div className="card open tapped">
                    <div className="questionText">{item.answer}</div>
                    <div className='buttons'>
                        <Button color={"red"} text={"I didn't remember"} />
                        <Button color={"yellow"} text={"Almost didn't remember"} />
                        <Button color={"green"} text={"Zap!"} />
                    </div>
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