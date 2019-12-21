import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const HeaderIconStyles = styled.div`
  display: flex;
  align-items: baseline;
  height: auto;
`;

const Icon = styled.div`
  font-size: 40px;
  padding: 15px;
  }
`;

function HeaderIcons() {
  return (
    <HeaderIconStyles>
      <Icon>
        <FontAwesomeIcon icon={faCompass} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faHeart} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faUser} />
      </Icon>
    </HeaderIconStyles>
  );
}

export default HeaderIcons;
