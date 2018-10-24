/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import { Config } from '../../config';

import AppName from '../appName';

it('renders the App Name Component', () => {
  shallow(<AppName />);
});

it('renders the App Name correctly', () => {
  const wrapper = shallow(<AppName />);
  const appNameText = Config.app.name;

  expect(wrapper.contains(appNameText)).toEqual(true);
});
