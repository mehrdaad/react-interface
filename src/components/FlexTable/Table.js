import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: .8rem;
  margin: 0.5rem;
  line-height: 1.5;
  border-bottom: 1px solid #d0d0d0;
  flex: 1 1 auto;
`;

const FlexTable = ({ children, ...props }) => (
  <Table {...props}>
    {children}
  </Table>
);

FlexTable.propTypes = {
  children: PropTypes.node
};

export default FlexTable;
