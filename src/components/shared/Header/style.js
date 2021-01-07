import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;

  .tabsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0;
  }

  .tabs {
    list-style-type: none;
  }
`;

export default HeaderContainer;
