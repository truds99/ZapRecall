import './ButtonStyle.css'

export default function Button({
    color, text, done, setDone, isAnswered, setIsAnswered, isOpen, setIsOpen, setIsRight}) {

    function userAnswer(option) {
        setDone(done + 1);
        setIsAnswered(!isAnswered);
        setIsOpen(!isOpen);
        setIsRight(option);
    }

    return (
        <div className={`button ${color}`} onClick={(() => userAnswer(color))}>
            {text}
        </div>
    )
}

