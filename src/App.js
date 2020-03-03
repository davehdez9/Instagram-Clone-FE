import React from 'react';
import HeaderContainer from './Components/HeaderContainer/HeaderContainer';
import PostContainer from './Components/PostContainer/PostContainer';

import styled from 'styled-components';

const AppStyles = styled.div`
  width: 750px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppStyles>
      <div className="App">
        <HeaderContainer />
        <PostContainer />
      </div>
    </AppStyles>
  );
}

export default App;
