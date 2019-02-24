/**
 *
 * LevelIndicator
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DEFAULT_COLOR = '#000';
const POSITIVE_FLOAT = 'left';
const NEGATIVE_FLOAT = 'right';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2px;
`;

const Progress = styled.div`
  height: 100%;
  -webkit-transition: width 0.2s;
  transition: width 0.2s;
`;

/* eslint-disable react/prefer-stateless-function */
class LevelIndicator extends React.PureComponent {
  render() {
    const { value, color = DEFAULT_COLOR } = this.props;

    const mainContainerStyle = {
      border: `1px solid ${color}`,
    };

    const progressStyle = {
      float: value >= 0 ? POSITIVE_FLOAT : NEGATIVE_FLOAT,
      backgroundColor: color,
      width: `${Math.abs(value)}%`,
    };

    return (
      <MainContainer style={mainContainerStyle}>
        <Progress style={progressStyle} />
      </MainContainer>
    );
  }
}

LevelIndicator.propTypes = {
  value: PropTypes.number,
  color: PropTypes.string
};

export default LevelIndicator;
