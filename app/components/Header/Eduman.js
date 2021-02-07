import React from 'react';
import styled from 'styled-components';
import Img from './Img';
import edumanLogo from './edumanlogo.png';

const Container = styled.div`
  background-color: #565aec;
  width: 240px;
  display: flex;
`;
const Eduman = () => (
  <Container>
    <Img src={edumanLogo} />
  </Container>
);

export default Eduman;
