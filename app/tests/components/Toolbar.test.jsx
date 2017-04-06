import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import Toolbar from 'Toolbar';
import Button from 'Button';

describe('<Toolbar />', () => {
  it('should exist', () => {
    expect(Toolbar).toExist();
  });

  describe('render', () => {
    it('should render a toolbar', () => {
      const toolbar = shallow(
        <Toolbar onClickEvent={f => f} />
      );
      const el = toolbar.find('.toolbar');

      expect(el.length).toBe(1);
    });

    it('should render 7 <Button /> components', () => {
      const toolbar = shallow(
        <Toolbar onClickEvent={f => f} />
      );
      const buttons = toolbar.find(Button);

      expect(buttons.length).toBe(7);
    });
  });

  describe('onClickEvent', () => {
    it('should call a callback function when clicked', () => {
      const spy = expect.createSpy();
      const toolbar = mount(
        <Toolbar onClickEvent={spy} />
      );
      const button = toolbar.find('#code');

      button.simulate('click');
      expect(spy).toHaveBeenCalledWith('`', '`');
    });
  });
});
