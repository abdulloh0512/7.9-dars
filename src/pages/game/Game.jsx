import styled from "styled-components";
import Keyboard from "./keyboard";
import Letters from "./letters";

const StyledContainer = styled.div`
  margin: 0 auto;
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
  margin-bottom: 79px;
  margin-top: 0 auto;
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

const StyledH1 = styled.h1`
  color: var(--White, #fff);
  text-align: center;
  font-family: "Mouse Memoirs";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 48px */
  letter-spacing: -0.2px;
  margin-left: 16px;
`;

const StyledBack = styled.img`
  margin: 0 auto;
`;

const StyledSpan = styled.span`
  display: flex;
  width: 57px;
  padding: 4px;
  align-items: flex-start;
  border-radius: 96px;
  background: var(--White, #fff);
  & > span {
    width: 21px;
    height: 8px;
    flex-shrink: 0;
    border-radius: 96px;
    background: var(--Dark-Navy, #261676);
  }
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 40px;
`;
const Game = () => {
  return (
    <>
    {/* Container style */}
      <StyledContainer>
        <StyledDiv>
          <StyledBtn>
            {/* icon  */}
            <StyledBack width={17} src="/images/icon-menu.svg" alt="" />
          </StyledBtn>
          <StyledH1>Countries</StyledH1>
          <StyledContent>
            <StyledSpan>
              <span></span>
            </StyledSpan>
            {/* heart img */}
            <img src="/images/icon-heart.svg" alt="" />
          </StyledContent>
        </StyledDiv>
        {/* Letters olib kelingan */}
        <Letters />
        {/* keyboard olib kelingan */}
        <Keyboard />
      </StyledContainer>
    </>
  );
};

export default Game;
