import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Foo from '../Foo';

describe('Test Button and Text inside div', function() {
  const wrapper = shallow(<Foo />);

  it('Test init status', function() {
    expect(wrapper.find('h4').length).toBe(1);
    expect(wrapper.find('h4').at(0).text()).toBe('Initial data...');
  });

  it('Test button click', function() {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('h4').at(0).text()).toBe('Data updated...');
  });

  it('Test State after button click', function() {
    wrapper.find('button').simulate('click');

    expect(wrapper.state().data).toBe('Data updated...');
    expect(wrapper.state('data')).toBe('Data updated...');

    // same to test props
    // expect(wrapper.props().data).toBe('Data updated...');
    // expect(wrapper.props('data')).toBe('Data updated...');
  });
});
