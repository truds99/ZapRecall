import './BottomStyle.css';


export default function Bottom({done, allRight, icons}){
    return (
        <div className={`bottom ${allRight}`}>
            {/* done === 4 ? allRight === 'yes' ? */}
            {done}/4 DONE
            {icons ? <div className='icons'>{icons}</div> : ''}
        </div>
    )
}