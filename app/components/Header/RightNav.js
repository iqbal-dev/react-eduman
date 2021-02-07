import React from 'react';
import styled from 'styled-components';
import { FaBell, FaUserAlt, FaAngleDown } from 'react-icons/fa';
import { IconContainer } from '.';

const NavrRight = styled.div`
  width: 147px;
  background-color: #15188d;
`;
const RoundShape = styled.span`
  height: 50px;
  width: 50px;
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  text-align: center;
  align-items: center;
  cursor: pointer;
`;
const Width = styled.span`
  width: ${props => props.width};
`;

const RightNav = () => (
  <NavrRight>
    <IconContainer>
      <Width width="60%">
        <RoundShape>
          <FaBell />
        </RoundShape>
      </Width>
      <Width width="30%">
        <RoundShape>
          <FaUserAlt />
        </RoundShape>
      </Width>
      <Width width="20%">
        <FaAngleDown />
      </Width>
    </IconContainer>
  </NavrRight>
);
export default RightNav;
