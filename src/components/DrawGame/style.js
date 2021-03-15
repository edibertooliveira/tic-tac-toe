import styled from 'styled-components';

export const DrawContainer = styled.div`
  position: absolute;
  z-index: 8;
  top: 50%;

  span {
    color: white;
    font-size: 1.4rem;
    font-weight: 800;
  }
`;

export const ResetGame = styled.button`
  margin-top: 0.5rem;
  background-color: #190be9;
  color: #fff;

  &:hover {
    background-color: #003be5;
  }
`;
