import React from 'react';

import Button from 'Button';

const Toolbar = (props) => {
  const buttons = [{
    id: 'h1',
    tag: '# ',
  }, {
    id: 'h2',
    tag: '## ',
  }, {
    id: 'h3',
    tag: '### ',
  }, {
    id: 'b',
    tag: '**',
  }, {
    id: 'i',
    tag: '_',
  }, {
    id: 'li',
    tag: '- ',
  }, {
    id: 'code',
    tag: '`',
  }];
  const renderedButtons = buttons.map(button => (
    <Button
      key={button.id}
      type={button.id}
      onClickEvent={() => props.onClickEvent(button.id)}
    />
  ));
  return (
    <div className="toolbar">
      {renderedButtons}
    </div>
  );
};

export default Toolbar;
