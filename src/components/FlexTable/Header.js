import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid #d0d0d0;
`;

const FlexHeader = ({ children, ...props }) => (
  <Header {...props}>
    {children}
  </Header>
);

FlexHeader.propTypes = {
  children: PropTypes.node
};

export default FlexHeader;
