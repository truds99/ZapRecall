import './CardStyle.css';
import React from 'react';

export default function Card ({item, numb}) {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="card">
        {
            isOpen ?
                <div className="questionText">{item.question}</div> :
                <p>Question {numb}</p>
        }

            <ion-icon onClick={() => setIsOpen(!isOpen)} class="play" name="play-outline"></ion-icon>
        </div>
    );
}   