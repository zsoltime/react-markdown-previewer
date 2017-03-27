import React, { Component } from 'react';
import marked from 'marked';

import Preview from 'Preview';
import Toolbar from 'Toolbar';

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "# Markdown Previewer\nI'm using _markdown_ with React**JS**, woohoo.\n",
    };
    marked.setOptions({
      sanitize: true,
      smartypants: true,
    });
  }
  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }
  render() {
    const markdown = marked(this.state.content);
    return (
      <div className="app">
        <div className="editor">
          <Toolbar onClickEvent={e => console.log(e)} />
          <textarea
            className="editor__field"
            rows="6"
            onChange={event => this.handleChange(event)}
            defaultValue={this.state.content}
          />
        </div>
        <Preview content={markdown} />
      </div>
    );
  }
}

export default Viewer;
