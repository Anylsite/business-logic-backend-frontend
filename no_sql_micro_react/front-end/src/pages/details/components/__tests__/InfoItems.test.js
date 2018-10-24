/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import InfoItem from '../InfoItems';

describe('<InfoItem />', () => {
  it('Should render', () => {
    shallow(<InfoItem text="foo" title="bar" />);
  });

  it('Should render correct title', () => {
    const Wrapper = shallow(<InfoItem text="foo" title="bar" />);
    expect(Wrapper.contains('bar')).toEqual(true);
  });

  it('Should render correct text', () => {
    const Wrapper = shallow(<InfoItem text="foo" title="bar" />);
    expect(Wrapper.contains('foo')).toEqual(true);
  });
});
