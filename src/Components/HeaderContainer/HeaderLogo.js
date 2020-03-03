import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const HeaderLogoStyles = styled.div`
  display: flex;
  align-items: baseline;
  height: auto;
`;

const Icon = styled.div`
  font-size: 30px;
  padding: 0 15px;
`;

const Logo = styled.div`
  font-size 35px;
  font-family: 'Oleo Script', cursive;
  padding: 0 15px;
  border-left: 1px solid darkgrey;
`;

function HeaderLogo() {
  return (
    <HeaderLogoStyles>
      <Icon>
        <FontAwesomeIcon className="instagram-icon" icon={faInstagram} />
      </Icon>
      <Logo>Instagram</Logo>
    </HeaderLogoStyles>
  );
}

export default HeaderLogo;
