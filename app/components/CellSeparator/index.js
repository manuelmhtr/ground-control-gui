/**
 *
 * CellSeparator
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 8px 12px;
  background-color: #eee;
  color: #777;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 14px;
`;

/* eslint-disable react/prefer-stateless-function */
class CellSeparator extends React.PureComponent {
  render() {
    const { text } = this.props;
    return <Container>{text}</Container>;
  }
}

CellSeparator.propTypes = {
  text: PropTypes.object.isRequired,
};

export default CellSeparator;
