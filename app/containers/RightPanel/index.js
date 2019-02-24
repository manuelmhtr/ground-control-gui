/**
 *
 * RightPanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import VideoView from '../../components/VideoView';
import './styles.css';

const videoUrl = 'http://192.168.15.36:8000';

/* eslint-disable react/prefer-stateless-function */
export class RightPanel extends React.Component {
  render() {
    return (
      <div id="right-panel">
        <VideoView videoUrl={videoUrl} />
      </div>
    );
  }
}

RightPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(RightPanel);
