import React from 'react';
import expect from 'expect';
import { render, shallow } from 'enzyme';

import Button from 'Button';

describe('<Button />', () => {
  it('should exist', () => {
    expect(Button).toExist();
  });

  describe('render', () => {
    it('should render a button', () => {
      const children = 'B';
      const button = render(
        <Button id="x" onClickEvent={f => f}>{children}</Button>
      );
      const actualButton = button.find('button');

      expect(actualButton.length).toBe(1);
    });

    it('should render the child element', () => {
      const children = 'B';
      const button = render(
        <Button id="x" onClickEvent={f => f}>{children}</Button>
      );
      const actualButton = button.find('button');

      expect(actualButton.text()).toBe(children);
    });
  });

  describe('onClickEvent', () => {
    it('should call a callback function when clicked', () => {
      const spy = expect.createSpy();
      const children = 'B';
      const button = shallow(
        <Button id="x" onClickEvent={spy}>{children}</Button>
      );
      const actualButton = button.find('button');

      actualButton.simulate('click');

      expect(spy).toHaveBeenCalled();
    });
  });
});
