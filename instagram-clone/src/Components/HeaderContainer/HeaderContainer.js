import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderIcons from './HeaderIcons';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  height: 120px;
  padding: 20px 45px;
`;

function HeaderContainer() {
  return (
    <div>
      <Header>
        <HeaderLogo />
        <HeaderSearch />
        <HeaderIcons />
      </Header>
    </div>
  );
}

export default HeaderContainer;
