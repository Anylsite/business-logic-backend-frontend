import Typography from '@material-ui/core/Typography/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const Content = ({ content }) => (
  <Typography gutterBottom component="p">
    {content}
  </Typography>
);

Content.displayName = 'Content';

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
