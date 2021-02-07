import React from 'react';
import { FaChartPie, FaHome, FaTicketAlt } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Eduman from './Eduman';
import HeaderLink from './HeaderLink';
import messages from './messages';
import NavBar from './NavBar';
import RightNav from './RightNav';

const Flex = styled.span`
  display: flex;
`;
const Container = styled.div`
  display: flex;
  height: 60px;
`;
export const IconContainer = styled.span`
  font-size: 25px;
  padding: 10px;
  display: flex;
`;
const Ticket = styled.span`
  transform: rotate(90deg);
`;

function Header() {
  return (
    <Container>
      <Flex>
        <Eduman />
      </Flex>

      <NavBar>
        <HeaderLink to="/">
          <IconContainer>
            <FaHome />
          </IconContainer>
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/dashboards">
          <IconContainer>
            <FaChartPie />
          </IconContainer>
          <FormattedMessage {...messages.dashboards} />
        </HeaderLink>
        <HeaderLink to="/features">
          <IconContainer>
            <Ticket>
              <FaTicketAlt />
            </Ticket>
          </IconContainer>
          <FormattedMessage {...messages.token} />
        </HeaderLink>
      </NavBar>
      <Flex>
        <RightNav />
      </Flex>
    </Container>
  );
}

export default Header;
