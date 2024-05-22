import emojiRigth from '../../assets/party.png'
import emojiWrong from '../../assets/sad.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Bottom({done, countHits, icons, cards, validValue}){
    
    function restart() {
        cards.sort(() => Math.random() - 0.5);
    }

    return (
        <Wrapper $done={done} >
            {done === 8 ? (
                countHits >= validValue ? (
                <>
                    <div className="messageTitle">
                        <img src={emojiRigth}></img>
                        Congratulations!
                    </div>
                    <p>You did it</p>
                </>
                ) : (
                <>
                    <div className="messageTitle">
                        <img src={emojiWrong}></img>
                        Well, not this time.
                    </div>
                    <p className="someLeft">
                        There's still some left, but don't give up.
                    </p>
                </>
                )
            ) : (
                ""
            )}
            {done}/8 ANSWERED
            {icons ? <div>{icons}</div> : ""}
            {done === 8 ? (
                <Link to="/" onClick={restart}>
                    Restart recall
                </Link>
            ) : (
                ""
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #333333;
  width: 100vw;
  height: ${({$done}) => $done === 8 ? '244px' : '102px'};
  display: flex;
  flex-direction: column;
  justify-content: ${({$done}) => $done === 8 ? 'space-around' : 'center'};
  align-items: center;
  font-size: 32px;
  font-family: Recursive;

  * {
    overflow-x: hidden;
    box-sizing: border-box;
  }

  &>div {
    display: flex;
  }

  & img {
    height: 35px;
    width: 35px;
    margin-right: 8px;
  }

  .messageTitle {
    display: flex;
    font-size: 18px;
    font-weight: 700;
    color: #333333;
    align-items: center;
  }

  & a {
    width: 275px;
    height: 40px;
    min-width: 167px;
    border-radius: 5px;
    font-family: Recursive;
    background-color: #fb6b6b;
    font-size: 14px;
    font-weight: 400;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & p {
    font-size: 28px;
    min-height: 31px;
  }

  & ion-icon {
    height: 30px;
    width: 30px;
  }

  .red {
    color: #FF3030;
  }

  .green {
    color: #2FBE34;
  }

  .yellow {
    color: #FF922E;
  }

  @media (max-width: 800px) {

    min-height: 70px;
    font-size: 22px;
    

    & p {
      font-size: 19.5px;
      min-height: 28px;
      text-align: center;
    }

    & a {
      min-width: 250px;
      height: 40px;
    }
  }

  @media (max-width: 370px) {
    & p.someLeft {
      min-height: 48px;
    }
  }
`;
