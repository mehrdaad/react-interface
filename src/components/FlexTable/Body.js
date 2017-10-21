import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Body = styled.div`
`;

const FlexBody = ({ children }) => (
  <Body>
    {children}
  </Body>
);

FlexBody.propTypes = {
  children: PropTypes.node
};

export default FlexBody;
