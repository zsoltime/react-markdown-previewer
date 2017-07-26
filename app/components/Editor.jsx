import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Toolbar from 'Toolbar';

class Editor extends Component {
  render() {
    const { content, fieldRef, handleClick, handleChange } = this.props;
    return (
      <div className="editor">
        <Toolbar onClickEvent={handleClick} />
        <textarea
          className="editor__field"
          ref={fieldRef}
          onChange={event => handleChange(event)}
          defaultValue={content}
        />
      </div>
    );
  }
}

Editor.propTypes = {
  content: PropTypes.string.isRequired,
  fieldRef: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Editor;
