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

const StyledBtnn = styled.button`
  margin: 0 auto;
  display: flex;
  width: 324px;
  padding: 24px 64px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  border-radius: 20px;
  background: #2463ff;
  box-shadow: 0px 1px 0px 6px #3c74ff inset, 0px -2px 0px 3px #140e66 inset;
`;

const Category = () => {
  return (
    <>
      <StyledContainer>
        <StyledDiv>
          <StyledBtn onClick={"/"}>
            <StyledBack width={17} src="/images/icon-back.svg" alt="" />
          </StyledBtn>
          <StyledH3>Pick a Category</StyledH3>
        </StyledDiv>
        <StyledBtnn onClick={"/game"}>Countries</StyledBtnn>
      </StyledContainer>
    </>
  );
};

export default Category;
