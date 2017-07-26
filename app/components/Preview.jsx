/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

const Preview = ({ content }) => (
  <div
    className="preview"
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

Preview.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Preview;
