import logo from '../../assets/logo.png';
import './MainMenuStyle.css';

export default function MainMenu() {
    return (
        <div className='mainMenu'>
            <img src={logo}/>
            <h1>ZapRecall</h1>
            <div className="startRecall">Start Recall!</div>
        </div>
    );
}