import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const HeaderSearchStyles = styled.div`
  width: 25%;
  height: 48%;
  display: flex;
  align-items: center;
  border: 1px solid darkgrey;
  border-radius: 5px;
  padding: 10px;
  margin-left: -10%;
  margin-top: 2%;
`;

const Icon = styled.i`
  // border: solid red;
  margin: 5%;
  color: grey;
`;

const Placeholder = styled.input`
  border: solid blue;
  padding: 10%;
  ::placeholder {
    text-align: left;
  }
`;

function HeaderSearch() {
  return (
    <HeaderSearchStyles>
      <Icon>
        <FontAwesomeIcon icon={faSearch} />
      </Icon>
      <Placeholder type="text" placeholder="Search" />
    </HeaderSearchStyles>
  );
}

export default HeaderSearch;
