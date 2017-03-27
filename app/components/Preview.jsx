import React, { PropTypes } from 'react';

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
