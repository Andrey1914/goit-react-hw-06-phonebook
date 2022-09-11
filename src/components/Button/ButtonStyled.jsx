import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0;
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[5]}px;
  cursor: pointer;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.small};
  transition: background-color 250ms linear, transform 250ms ease-in-out;
  /* background-color: rgb(0, 157, 192); */
  background: transparent;
  box-shadow: 0px 3px 5px 1px rgba(45, 90, 124, 0.2);
  :hover,
  :focus {
    background-color: #ededed;
    /* background-color: rgb(0, 91, 157); */
    /* color: ${p => p.theme.colors.muted}; */
    transform: scale(1.02);
  }
`;
