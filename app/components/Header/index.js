/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Container = styled.div`
  margin: 0;
  padding: 12px;
  background-color: #2e8aff;
  display: flex;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 24px;
  font-weight: 300;
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends React.PureComponent {
  render() {
    return (
      <Container>
        <Title>
          <strong>
            <FormattedMessage {...messages.title} />
          </strong>
          <FormattedMessage {...messages.subtitle} />
        </Title>
      </Container>
    );
  }
}

Header.propTypes = {};

export default Header;
