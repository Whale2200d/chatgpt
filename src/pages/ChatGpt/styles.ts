import styled from 'styled-components';

export const Container = styled.div`
  background-color: #343541;
  color: rgba(225, 255, 255, 0.5);
  display: flex;
`;

export const SideBarSection = styled.section`
  background-color: #202123;
  height: 100vh;
  width: 244px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Button = styled.button`
  border: solid 0.5px rgba(255, 255, 255, 0.5);
  transition: all 0.15s ease;
  background-color: transparent;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;

  &:hover {
    border: solid 0.5px rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
    transition: all 0.15s ease;
  }
`;

export const Ul = styled.ul`
  margin: 10px;
  height: 100%;

  > li {
    padding: 15px 10px;
    border: solid 0.5px rgba(255, 255, 255, 0.5);
    border-radius: 5px;

    transition: all 0.15s ease;
  }

  > li:hover {
    cursor: pointer;
    border: solid 0.5px rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);

    transition: all 0.15s ease;
  }
`;

export const Nav = styled.nav`
  border-top: solid 0.5px rgba(255, 255, 255, 0.5);
  padding: 10px;
  margin: 10px;
`;

export const MainSection = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const BottomSectionContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  position: relative;

  width: 100%;
  max-width: 650px;

  > input {
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.05);

    font-size: 20px;
    padding: 12px 15px;

    box-shadow: rgba(0, 0, 0, 0.05) 0 54px 55px,
      rgba(0, 0, 0, 0.05) 0 -12px 30px, rgba(0, 0, 0, 0.05) 0 4px 6px,
      rgba(0, 0, 0, 0.05) 0 12px 3px, rgba(0, 0, 0, 0.05) 0 -3px 5px;
  }

  > div {
    position: absolute;
    bottom: 15px;
    right: 10px;
    cursor: pointer;
  }
`;

export const InfoParagraph = styled.p`
  font-size: 11px;
  padding: 10px;
`;
