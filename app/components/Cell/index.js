/**
 *
 * Cell
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LevelIndicator from '../LevelIndicator';

const MainContainer = styled.div`
  width: 100%;
  padding: 16px 12px;
  background-color: #fff;
  display: flex;
  border-bottom: 1px solid #eee;
`;

const InfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
`;

const LevelIndicatorContainer = styled.div`
  width: 20%;
  margin-left: 12px;
`;

const Title = styled.div`
  color: #000;
  font-weight: 500;
  font-size: 18px;
`;

const Value = styled.div`
  color: #000;
  font-weight: 400;
  font-size: 16px;
`;

/* eslint-disable react/prefer-stateless-function */
class Cell extends React.PureComponent {
  getLevelIndicator(value, color) {
    if (!value && value !== 0) return null;
    return <LevelIndicator value={value} color={color} />;
  }

  render() {
    const { title, value, levelValue, levelColor } = this.props;

    return (
      <MainContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Value>{value}</Value>
        </InfoContainer>
        <LevelIndicatorContainer>
          {this.getLevelIndicator(levelValue, levelColor)}
        </LevelIndicatorContainer>
      </MainContainer>
    );
  }
}

Cell.propTypes = {
  title: PropTypes.object.isRequired,
  value: PropTypes.string,
  levelValue: PropTypes.number,
  levelColor: PropTypes.string,
};

export default Cell;
