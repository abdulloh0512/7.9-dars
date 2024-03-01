// Styled components import qilinyapti
import styled from "styled-components";

// container uchun style
const StyledContainer = styled.div`
  padding-top: 206px;
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

// menu deb nomlangan bo'limni markazga joylashtirish uchun berilgan style
const Menu = styled.div`
  position: relative;
  padding-top: 138px;
  border-radius: 48px;
  border-radius: 48px;
  background: linear-gradient(180deg, #344aba 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow: 0px 6px 0px 8px #2463ff inset, 0px -8px 0px 4px #140e66 inset;
  height: 481px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// hangman game logosi uchun berilgan style
const Img = styled.img`
  position: absolute;
  top: -50px;
`;

// how to play buttoni uchun berilgan style
const StyledBtn = styled.button`
  background: #2463ff;
  padding: 24px 64px;
  border-radius: 40px;
  box-shadow: 0px -2px 0px 3px #140e66 inset, 0px 1px 0px 6px #3c74ff inset;
  border: none;
  cursor: pointer;
  color: white;
  letter-spacing: 1.6px;
  font-size: 32px;
  text-align: center;
`;

// play imgi uchun berilgan style
const StyledImg = styled.img`
  margin-bottom: 57px;
`;

const BigButton = styled.button`
  width: 160px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 999px;
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: 0px -4px 0px 5px #243041 inset, 0px -12px 0px 11px #9d2df5 inset;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 57px;
  border: none;
  transition: all 300ms;
  padding-top: 55px;

  &:hover,
  :active {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.25) 100%
      ),
      linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  }
`;

//  Home page funksiyasi
const Home = () => {
  return (
    <>
      {/* yaratb olingan container clas */}
      <StyledContainer>
        {/* yaratb olingan menu clas */}
        <Menu>
          {/* yaratb olingan logo clas */}
          <Img width={250} src="./images/logo.svg" alt="" />
          <BigButton onClick={"/category"}>
            {/* yaratb olingan play img clas */}
            <StyledImg src="/images/icon-play.svg" alt="" />
          </BigButton>
          {/* yaratb olingan how to play clas */}
          <StyledBtn onClick={"/how-to"}>HOW TO PLAY</StyledBtn>
        </Menu>
      </StyledContainer>
    </>
  );
};

export default Home;
