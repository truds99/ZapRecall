import './BottomStyle.css'
import emojiRigth from '../../assets/party.png'
import emojiWrong from '../../assets/sad.png'
import { Link } from 'react-router-dom'

export default function Bottom({done, countHits, icons, cards, validValue}){
    
    function restart() {
        cards.sort(() => Math.random() - 0.5);
    }

    return (
        <div className={`bottom ${done === 4 ? "bigger" : ''}`}>
            {done === 4 ? 
                (countHits >= validValue ?
                    <><div className='messageTitle'>
                        <img src={emojiRigth}></img>
                        Congratulations!
                      </div>
                      <p className='messageText'>You did it</p>
                    </> :
                    <><div className='messageTitle'>
                        <img src={emojiWrong}></img>
                        Well, not this time.
                    </div>
                    <p className='messageText someLeft'>There's still some left, but don't give up.</p>
                    </>
                ) : ''}
            {done}/4 ANSWERED
            {icons ? <div className='icons'>{icons}</div> : ''}
            {done === 4 ? <Link to='/' className='button' onClick={restart}>Restart recall</Link> : ''}
        </div>
    )
}
