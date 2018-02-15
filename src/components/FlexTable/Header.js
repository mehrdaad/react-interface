import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid #d0d0d0;
`;

const Header = ({ children, ...props }) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
);

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
