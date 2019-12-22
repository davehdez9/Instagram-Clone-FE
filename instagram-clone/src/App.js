import React from 'react';
import HeaderContainer from './Components/HeaderContainer/HeaderContainer';
import styled from 'styled-components';

const AppStyles = styled.div`
  border: solid gray;
  width: 80%;
  margin: 0 auto;
  height: 100vh;
`;

function App() {
  return (
    <AppStyles>
      <div className="App">
        <HeaderContainer />
      </div>
    </AppStyles>
  );
}

export default App;
