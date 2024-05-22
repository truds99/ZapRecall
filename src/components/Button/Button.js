import styled from "styled-components";

export default function Button
    ({  color, 
        text, 
        done, 
        setDone, 
        isAnswered, 
        setIsAnswered, 
        isOpen, 
        setIsOpen, 
        setIsRight
    }) {

    function userAnswer(option) {
        setDone(done + 1);
        setIsAnswered(!isAnswered);
        setIsOpen(!isOpen);
        setIsRight(option);
    }

    return (
      <Wrapper onClick={() => userAnswer(color)} $color={color}>
        {text}
      </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 170px;
  height: 65px;
  font-size: 16px;
  font-weight: 400;
  font-family: Recursive;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 6px;
  text-align: center;
  overflow: hidden;
  background-color: ${({$color}) =>
      $color === "red"
      ? "#FF3030"
      : $color === "green"
      ? "#2FBE34"
      : "#FF922E"};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
      width: 85.17px;
      height: 37.17px;
      font-size: 12px;
      font-weight: 400;
      max-width: 28%;
  }
`;


