import './BottomStyle.css'
import emojiRigth from '../../assets/party.png'
import emojiWrong from '../../assets/sad.png'


export default function Bottom({done, allRight, icons}){
    return (
        <div className={`bottom ${allRight}`}>
            {done === 4 ? 
                (allRight === 'yes' ?
                    <><div className='messageTitle'>
                        <img src={emojiRigth}></img>
                        Congratulations!
                      </div>
                      <p className='messageText'>You didn't forget any cards</p>
                    </> :
                    <><div className='messageTitle'>
                        <img src={emojiWrong}></img>
                        Well, not this time.
                    </div>
                    <p className='messageText'>There's still some left, but don't give up.</p>
                    </>
                ) : ''}
            {done}/4 DONE
            {icons ? <div className='icons'>{icons}</div> : ''}
        </div>
    )
}
