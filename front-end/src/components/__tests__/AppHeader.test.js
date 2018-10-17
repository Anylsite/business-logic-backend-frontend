/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';

import AppHeader from '../AppHeader';

describe('<AppHeader />', () => {
  it('Should render the App Header', () => {
    shallow(<AppHeader />);
  });

  it('Should render App Name component in App Header', () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper.find('AppName').length).toEqual(1);
  });
});
