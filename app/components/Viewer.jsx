import React, { Component } from 'react';
import marked from 'marked';

import Preview from 'Preview';
import Toolbar from 'Toolbar';

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "# Markdown Previewer\n\nLook mum, I'm using **markdown** with React_JS_, woohoo.\n\nSartorial sustainable plaid tote bag, disrupt godard hella. Knausgaard you probably haven't heard of them selvage ethical. Fap seitan pok pok, flexitarian humblebrag hashtag austin jean shorts cold-pressed hoodie banh mi church-key tilde. \n\nNormcore scenester freegan four dollar toast, franzen chambray PBR&B affogato helvetica. Photo booth swag man braid, tumblr glossier jianbing humblebrag squid ramps hexagon. \n\nCray austin drinking vinegar hot chicken, tumblr try-hard quinoa vaporware fanny pack trust fund. Williamsburg twee next level la croix, biodiesel hot chicken Pinterest tote bag hella tilde.\n",
    };
    marked.setOptions({
      sanitize: true,
      smartypants: true,
    });
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }
  handleClick(pre, post) {
    const content = this.field.value;
    const start = this.field.selectionStart;
    const end = this.field.selectionEnd;
    let left = 0;
    let right = 0;

    if (end === start) {
      left = content.slice(0, start + 1).search(/\S+$/);
      right = content.slice(start).search(/\s/);

      right = right < 0 ? left : start + right + pre.length;
    } else {
      left = start;
      right = end + pre.length;
    }

    const updated = content.slice(0, left) + pre + content.slice(left);
    this.field.value = updated.slice(0, right) + post + updated.slice(right);

    this.setState({
      content: this.field.value,
    });
  }
  render() {
    const markdown = marked(this.state.content);
    return (
      <div className="app">
        <div className="editor">
          <Toolbar onClickEvent={this.handleClick} />
          <textarea
            className="editor__field"
            ref={(node) => { this.field = node; }}
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
