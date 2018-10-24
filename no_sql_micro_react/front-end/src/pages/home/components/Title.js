import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const Title = ({ title }) => (
  <Typography variant="title" component="h2">
    {title}
  </Typography>
);

Title.displayName = 'Title';

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
