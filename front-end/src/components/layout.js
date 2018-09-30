import React from 'react';

export default Component => props => (
  <div>
    <header>This is the layout</header>
    <Component {...props} />
  </div>
);
