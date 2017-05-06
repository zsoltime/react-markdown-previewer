import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import marked from 'marked';

import Editor from 'Editor';
import Preview from 'Preview';
import Viewer from 'Viewer';

describe('<Viewer />', () => {
  it('should exist', () => {
    expect(Viewer).toExist();
  });

  describe('render', () => {
    it('should render a Preview and an Editor component', () => {
      const viewer = shallow(<Viewer />);

      expect(viewer.find(Editor).length).toBe(1);
      expect(viewer.find(Preview).length).toBe(1);
    });

    it('should pass the actual content state to the Editor component', () => {
      const content = 'test content';
      const viewer = shallow(<Viewer />);
      viewer.setState({
        content,
      });

      expect(viewer.state().content).toBe(content);

      const editorContent = viewer.find(Editor).props().content;
      expect(editorContent).toBe(content);
    });

    it('should pass the parsed content to the Preview component', () => {
      const content = 'test <em>content</em>';
      const viewer = shallow(<Viewer />);
      viewer.setState({
        content,
      });

      expect(viewer.state().content).toBe(content);

      const previewContent = viewer.find(Preview).props().content;
      expect(previewContent).toBe(marked(content));
    });
  });

  describe('handleChange', () => {
    it('should change state when handleChange is called', () => {
      const content = 'test content';
      const updatedContent = 'updated test content';
      const viewer = shallow(<Viewer />);
      viewer.setState({
        content,
      });
      const event = {
        target: { value: updatedContent },
      };

      expect(viewer.state().content).toBe(content);

      viewer.instance().handleChange(event);
      viewer.update();
      expect(viewer.state().content).toBe(updatedContent);
    });
  });

  describe('handleClick', () => {});
});
