import { Navigate } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding-top: 32px;
  min-height: 100vh;
  padding-left: 25px;
  padding-right: 26px;
  background: url("/images/background-mobile.svg") no-repeat center/cover;
  /* Tablet rejim uchun media */
  @media screen and (min-width: 768px) {
    padding-left: 88px;
    padding-right: 88px;
  }
  @media screen and (min-width: 1216px) {
    padding-left: 424px;
    padding-right: 424px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 79px;
`;

const StyledBtn = styled.button`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 999px;
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: 0px -5px 0px -1px rgba(157, 45, 245, 0.25) inset;
  border: none;
`;

const StyledBack = styled.img`
  margin: 0 auto;
`;

const StyledH3 = styled.h3`
  -webkit-text-stroke-width: 2;
  -webkit-text-stroke-color: #243041;
  font-size: 48px;
  letter-spacing: 2.4px;
  background: linear-gradient(180deg, #67b6ff 16.42%, #fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledMenu = styled.div`
  display: flex;
  padding: 32px;
  justify-content: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 20px;
  background: #fff;
  flex-direction: column;
  & > p {
    color: #887dc0;
    font-family: "Mouse Memoirs";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
    letter-spacing: 0.8px;
  }
`;

const StyledH1 = styled.h1`
  color: #261676;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 28.8px */
  letter-spacing: 1.2px;
  text-transform: uppercase;
  & > span {
    color: #2463ff;
    padding-right: 16px;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HowTo = () => {
  return (
    <>
      <StyledContainer>
        <StyledDiv>
          <StyledBtn onClick={"/"}>
            <StyledBack width={17} src="/images/icon-back.svg" alt="" />
          </StyledBtn>
          <StyledH3>How to Play</StyledH3>
        </StyledDiv>
        <StyledFlex>
          <StyledMenu>
            <StyledH1>
              <span>01</span>
              Choose a category
            </StyledH1>
            <p>
              First, choose a word category, like animals or movies. The
              computer then randomly selects a secret word from that topic and
              shows you blanks for each letter of the word.
            </p>
          </StyledMenu>
          <StyledMenu>
            <StyledH1>
              <span>02</span>
              Guess letters
            </StyledH1>
            <p>
              Take turns guessing letters. The computer fills in the relevant
              blank spaces if your guess is correct. If it’s wrong, you lose
              some health, which empties after eight incorrect guesses.
            </p>
          </StyledMenu>
          <StyledMenu>
            <StyledH1>
              <span>03</span>
              Win or lose
            </StyledH1>
            <p>
              You win by guessing all the letters in the word before your health
              runs out. If the health bar empties before you guess the word, you
              lose.
            </p>
          </StyledMenu>
        </StyledFlex>
      </StyledContainer>
    </>
  );
};

export default HowTo;
