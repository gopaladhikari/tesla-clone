import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  heading,
  paragraph,
  leftButton,
  rightButton,
  backgroundImage,
}) {
  return (
    <Wrap bgImg={backgroundImage}>
      <Fade bottom cascade>
        <ItemText>
          <h1>{heading}</h1>
          <p>{paragraph}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButtton>{leftButton}</LeftButtton>
            {rightButton && <RightButtton>{rightButton}</RightButtton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url(${props.bgImg})`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButtton = styled.div`
  background-color: rgba(23 26 32 / 0.8);
  height: 60px;
  width: 256px;
  color: white;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;

const RightButtton = styled(LeftButtton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled(ButtonGroup)`
  flex-direction: column;
`;
