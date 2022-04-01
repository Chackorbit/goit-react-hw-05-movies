import styled from 'styled-components';

export const FilmContainer = styled.div`
  display: flex;
  width: 1400px;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
`;

export const FilmsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;

  padding: 40px 0;
`;
export const FilmsItem = styled.li`
  width: 300px;
  height: 600px;
  gap: 20px;
  overflow: hidden;
  transition: transform 250ms ease;

  -webkit-box-shadow: -1px 2px 10px 3px rgba(0, 0, 0, 0.84);
  box-shadow: -1px 2px 10px 3px rgba(0, 0, 0, 0.84);

  :hover {
    transform: scale(1.1);
  }
`;

export const FilmTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
