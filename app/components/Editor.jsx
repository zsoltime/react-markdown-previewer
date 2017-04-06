import React, { Component, PropTypes } from 'react';
import Toolbar from 'Toolbar';

class Editor extends Component {
  render() {
    return (
      <div className="editor">
        <Toolbar onClickEvent={this.props.handleClick} />
        <textarea
          className="editor__field"
          ref={this.props.fieldRef}
          onChange={event => this.props.handleChange(event)}
          defaultValue={this.props.content}
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
