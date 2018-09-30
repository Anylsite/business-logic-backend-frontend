/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import Content from '../Content';
import Title from '../Title';
import SingleSensor from '../SingleSensor';

describe('<Title />', () => {
  it('Should render SingleSensor Title', () => {
    shallow(<Title title="foo" />);
  });

  it('Should render correct title for SingleSensor Title Component', () => {
    const Wrapper = shallow(<Title title="foo" />);
    expect(Wrapper.contains('foo')).toBe(true);
  });
});

describe('<Content />', () => {
  it('Should render SingleSensor Content', () => {
    shallow(<Content content="foo" />);
  });

  it('Should render correct content for SingleSensor Content Component', () => {
    const Wrapper = shallow(<Content content="foo" />);
    expect(Wrapper.scontains('foo')).toBe(true);
  });
});


describe('<SingleSensor />', () => {

  const Wrapper = shallow(<SingleSensor content="content" title="title" />);

  it('Should contain title in SingleSensor Component', () => {
    expect(Wrapper.find('Title').length).toBe(1);
  });

  it('Should contain Content in SingleSensor Component', () => {
    expect(Wrapper.find('Content').length).toBe(1);
  });

});
