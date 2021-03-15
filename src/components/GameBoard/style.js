import styled from 'styled-components';

export const BoardContainer = styled.div`
  background-color: #036b52;
  border-radius: 15px;
  display: grid;
  flex-wrap: wrap;
  height: 90%;
  justify-content: center;
  grid-template-columns: repeat(3, 3fr);
  grid-template-rows: repeat(3, 3fr);
  gap: 0.5rem;
  padding: 10px;
  width: 90%;
  max-width: 400px;
  max-height: 400px;
  `;
