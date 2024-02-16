import './ButtonStyle.css'

export default function Button({color, text}) {
    return (
        <div className={`button ${color}`}>
            {text}
        </div>
    )
}