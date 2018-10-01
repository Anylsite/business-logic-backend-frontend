import React from 'react';
import { compose } from 'recompose';

import { Layout } from '../../components';

const DetailsPage = () => (
  <div>
    This is the Details Page
  </div>
);

DetailsPage.displayName = 'DetailsPage';

export default compose(
  Layout,
)(DetailsPage);
