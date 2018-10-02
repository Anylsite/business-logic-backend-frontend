/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import InfoGridItem from '../InfoGridItem';

describe('<InfoGridItem />', () => {
  it('Should render', () => {
    shallow(<InfoGridItem text="foo" number={123} />);
  });

  it('Should render correct text', () => {
    const Wrapper = shallow(<InfoGridItem text="foo" number={123} />);
    expect(Wrapper.contains('foo')).toEqual(true);
  });

  it('Should render correct numbers', () => {
    const Wrapper = shallow(<InfoGridItem text="foo" number={123} />);
    expect(Wrapper.contains(123)).toEqual(true);
  });

  it('Should render correct suffix', () => {
    const Wrapper = shallow(<InfoGridItem text="foo" number={123} suffix="suffix" />);
    expect(Wrapper.contains('suffix')).toEqual(true);
  });
});
