/**
 *
 * VideoView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Iframe from 'react-iframe';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const VideoViewContainer = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  background-color: #000;
`;

const EmptyView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WhiteTitle = styled.h4`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

/* eslint-disable react/prefer-stateless-function */
class VideoView extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.videoUrl !== nextProps.videoUrl;
  }

  getEmptyView() {
    return (
      <EmptyView>
        <WhiteTitle>
          <FormattedMessage {...messages.emtpyTitle} />
        </WhiteTitle>
      </EmptyView>
    );
  }

  getVideo(url) {
    return (
      <Iframe
        url={url}
        width="100%"
        height="100%"
        id="video-iframe"
        display="initial"
        position="relative"
        allowFullScreen
      />
    );
  }

  render() {
    const { videoUrl } = this.props;
    const content = videoUrl ? this.getVideo(videoUrl) : this.getEmptyView();

    return <VideoViewContainer>{content}</VideoViewContainer>;
  }
}

VideoView.propTypes = {
  videoUrl: PropTypes.string,
};

export default VideoView;
