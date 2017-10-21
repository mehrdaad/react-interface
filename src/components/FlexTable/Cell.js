import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cell = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-grow: ${props => props.grow};
  flex-shrink: ${props => props.shrink};
  flex-basis: ${props => props.basis};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  padding: 0.5em;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0px;
`;

const FlexCell = ({ children, ...props }) => (
  <Cell {...props}>
    {children}
  </Cell>
);

FlexCell.defaultProps = {
  grow: 1,
  shrink: 1,
  basis: 'auto',
  align: 'initial',
  justify: 'start'
};

FlexCell.propTypes = {
  grow: PropTypes.number,
  basis: PropTypes.any,
  align: PropTypes.string,
  children: PropTypes.node,
  justify: PropTypes.string
};

export default FlexCell;
