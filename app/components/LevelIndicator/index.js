/**
 *
 * LevelIndicator
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DEFAULT_COLOR = '#000';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2px;
`;

const Progress = styled.div`
  height: 100%;
  -webkit-transition: width 0.5s;
  transition: width 0.5s;
`;

/* eslint-disable react/prefer-stateless-function */
class LevelIndicator extends React.PureComponent {
  render() {
    const { value, color = DEFAULT_COLOR } = this.props;

    const mainContainerStyle = {
      border: `1px solid ${color}`,
    };

    const progressStyle = {
      width: `${value}%`,
      backgroundColor: `${color}`,
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
  color: PropTypes.string,
};

export default LevelIndicator;
