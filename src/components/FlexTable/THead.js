import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cell from './Cell';

const HeaderCell = styled(Cell)`
  white-space: normal;
  font-weight: bold;
`;

const THead = ({ children, ...props }) => (
  <HeaderCell {...props}>
    {children}
  </HeaderCell>
);

THead.defaultProps = {
  grow: 1
};

THead.propTypes = {
  grow: PropTypes.number,
  children: PropTypes.node
};

export default THead;
