import styled, { css } from "styled-components";

// variant = "circular" | "restangular";
const StyledButton = styled.button`
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  background: transparent;
  color: white;
  letter-spacing: 1.6px;
  font-size: 32px;
  text-align: center;

  ${(props) => {
    switch (props.value) {
      case "circular":
        return css`

        `;
      case "restangular":
        return css`
          background: ${(props) => props.theme.colors.blue};
          padding: 24px 0;
          border-radius: 20px;
          width: 100%;
          text-align: center;
        `;
      default:
        break;
    }
  }}
`;

const Button = ({ children, onClick, variant }) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
