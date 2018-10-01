/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import Content from '../Content';
import SingleSensor from '../SingleSensor';
import Title from '../Title';

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
    expect(Wrapper.contains('foo')).toBe(true);
  });
});

const testSensorProp = {
  id: 1,
  name: 'Foo',
  meta: {
    description: 'Boo',
    last_updated: '2017-10-25T08:41:24.860Z',
    company: 'Willms, Zulauf and Greenholt',
    hash: '1LXH4L4WTUPSMBOE43QRB6ZJFWAFL',
    ipaddress: '168.54.129.163',
    version: '9.2.1',
  },
};

describe('<SingleSensor />', () => {
  const Wrapper = shallow(<SingleSensor sensor={testSensorProp} />);

  it('Should contain title in SingleSensor Component', () => {
    expect(Wrapper.find('Title').length).toBe(1);
  });

  it('Should contain Content in SingleSensor Component', () => {
    expect(Wrapper.find('Content').length).toBe(1);
  });
});
