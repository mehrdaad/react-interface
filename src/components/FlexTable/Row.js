import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

const FlexRow = ({ children, className }) => (
  <Row className={className}>
    {children}
  </Row>
);

FlexRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default FlexRow;
