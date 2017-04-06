import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Editor from 'Editor';
import Toolbar from 'Toolbar';

describe('<Editor />', () => {
  it('should exist', () => {
    expect(Editor).toExist();
  });

  describe('render', () => {
    it('should render a textarea and Toolbar component', () => {
      const editor = shallow(
        <Editor
          content=""
          fieldRef={f => f}
          handleChange={f => f}
          handleClick={f => f}
        />
      );
      const textarea = editor.find('.editor__field');

      expect(textarea.length).toBe(1);
      expect(textarea.type()).toBe('textarea');
      expect(editor.find(Toolbar).length).toBe(1);
    });

    it('should set the default value of the textarea', () => {
      const content = 'Test content \n\n';
      const editor = shallow(
        <Editor
          content={content}
          fieldRef={f => f}
          handleChange={f => f}
          handleClick={f => f}
        />
      );
      const textarea = editor.find('.editor__field');

      expect(textarea.props().defaultValue).toBe(content);
    });
  });

  describe('handleChange', () => {
    it('should call handleChange on change event', () => {
      const spy = expect.createSpy();
      const content = 'Test content \n\n';
      const editor = shallow(
        <Editor
          content={content}
          fieldRef={f => f}
          handleChange={spy}
          handleClick={f => f}
        />
      );

      editor.find('textarea').simulate('change');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('handleClick', () => {
    it('should pass handleClick callback to Toolbar', () => {
      const spy = expect.createSpy();
      const editor = shallow(
        <Editor
          content="Test content"
          fieldRef={f => f}
          handleChange={f => f}
          handleClick={spy}
        />
      );
      const toolbar = editor.find(Toolbar);

      expect(toolbar.props().onClickEvent).toBe(spy);
    });
  });
});
