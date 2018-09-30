import React from 'react';
import { compose } from 'recompose';

import { Layout } from '../../components';

const Page = () => (
  <div>
    Home Page
  </div>
);

export default compose(
  Layout,
)(Page);
