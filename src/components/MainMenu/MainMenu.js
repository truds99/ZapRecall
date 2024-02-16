import logo from '../../assets/logo.png';
import './MainMenuStyle.css';
import { Link } from "react-router-dom";

export default function MainMenu() {
    return (
        <div className='mainMenu'>
            <img src={logo}/>
            <h1>ZapRecall</h1>
            <Link to="/content" className="startRecall">Start Recall!</Link>
        </div>
    );
}