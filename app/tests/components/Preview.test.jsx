import React from 'react';
import expect from 'expect';
import { render } from 'enzyme';

import Preview from 'Preview';

describe('<Preview />', () => {
  it('should exist', () => {
    expect(Preview).toExist();
  });

  describe('render', () => {
    it('should render content as HTML', () => {
      const htmlString = 'This is a <strong>test</strong>';
      const preview = render(
        <Preview content={htmlString} />
      );
      const content = preview.find('strong');

      expect(content.length).toBe(1);
      expect(content.text()).toBe('test');
    });
  });
});
