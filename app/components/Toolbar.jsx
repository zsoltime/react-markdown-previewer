/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Button';

const Toolbar = ({ onClickEvent }) => {
  const buttons = [{
    id: 'h1',
    pre: '\n# ',
    post: '\n',
    btn: 'h1',
  }, {
    id: 'h2',
    pre: '\n## ',
    post: '\n',
    btn: 'h2',
  }, {
    id: 'h3',
    pre: '\n### ',
    post: '\n',
    btn: 'h3',
  }, {
    id: 'b',
    pre: '**',
    post: '**',
    btn: (<strong>B</strong>),
  }, {
    id: 'i',
    pre: '_',
    post: '_',
    btn: (<em>i</em>),
  }, {
    id: 'code',
    pre: '`',
    post: '`',
    btn: (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502.664 502.664" height="16" width="16">
        <path d="M153.821,358.226L0,274.337v-46.463l153.821-83.414v54.574L46.636,250.523l107.185,53.431 C153.821,303.954,153.821,358.226,153.821,358.226z" />
        <path d="M180.094,387.584L282.103,115.08h32.227L212.084,387.584H180.094z" />
        <path d="M348.843,358.226v-54.272l107.164-52.999l-107.164-52.59v-53.927l153.821,83.522v46.183 L348.843,358.226z" />
      </svg>
    ),
  }, {
    id: 'li',
    pre: '\n- ',
    post: '',
    btn: (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 231" height="16" width="16">
        <rect width="181" x="50" y="164.5" height="33" />
        <rect width="181" x="50" y="99.5" height="33" />
        <rect width="181" x="50" y="32.5" height="33" />
        <rect width="33" y="165.5" height="33" />
        <rect width="33" y="99.5" height="33" />
        <rect width="33" y="32.5" height="33" />
      </svg>
    ),
  }];
  return (
    <div className="toolbar">
      {buttons.map(button => (
        <Button
          key={button.id}
          id={button.id}
          onClickEvent={() => onClickEvent(button.pre, button.post)}
        >{button.btn}</Button>
      ))}
    </div>
  );
};

Toolbar.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
};

export default Toolbar;
