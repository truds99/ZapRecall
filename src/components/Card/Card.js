import './CardStyle.css'

export default function Card ({item, numb}) {
    return (
        <div className="card">
            Question {numb}
            <ion-icon name="play-outline"></ion-icon>
        </div>
    );
}