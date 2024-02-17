import './ButtonStyle.css'

export default function Button({color, text, done, setDone}) {

    function userAnswer(option) {
        setDone(done + 1);
    }

    return (
        <div className={`button ${color}`} onClick={(() => userAnswer(color))}>
            {text}
        </div>
    )
}

