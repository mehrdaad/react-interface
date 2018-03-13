import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system'

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
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
  ${space}
`;

const Cell = ({ children, ...props }) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
);

Cell.defaultProps = {
  grow: 1,
  shrink: 1,
  basis: 'auto',
  align: 'initial',
  justify: 'start',
  wrap: 'nowrap',
  direction: 'row'
};

Cell.propTypes = {
  grow: PropTypes.number,
  basis: PropTypes.any,
  align: PropTypes.string,
  children: PropTypes.node,
  justify: PropTypes.string,
  wrap: PropTypes.string,
  direction: PropTypes.string,
};

export default Cell;
