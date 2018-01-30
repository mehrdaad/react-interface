import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  ${space}
`;

const FlexRow = ({ children, className, ...rest }) => (
  <Row className={className} {...rest}>
    {children}
  </Row>
);

FlexRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default FlexRow;
