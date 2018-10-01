import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';

const LeftHeader = ({ sensor }) => (
  <Grid item lg={8} md={6} sm={12}>
    <Typography variant="headline" component="h1">
      {sensor.name}
    </Typography>
    <Typography gutterBottom variant="subheading" color="textSecondary">
      {sensor.meta.company}
    </Typography>
    <Typography gutterBottom variant="caption" component="p">
      {sensor.meta.description}
    </Typography>
    <Typography gutterBottom variant="caption" color="secondary" component="p">
      Sensor was last updated
      {' '}
      {moment(new Date(sensor.meta.last_updated)).fromNow()}
    </Typography>
  </Grid>
);

LeftHeader.displayName = 'LeftHeader';

LeftHeader.propTypes = {
  sensor: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    meta: PropTypes.shape({
      description: PropTypes.string,
      last_updated: PropTypes.string,
      company: PropTypes.string,
      hash: PropTypes.string,
      ipaddress: PropTypes.string,
      version: PropTypes.string,
    }),
  }).isRequired,
};

export default LeftHeader;
