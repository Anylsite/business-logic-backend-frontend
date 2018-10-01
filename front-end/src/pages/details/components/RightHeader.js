import Grid from '@material-ui/core/Grid/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import InfoItem from './InfoItems';

const RightHeader = ({ sensor }) => (
  <Grid item lg={4} md={6} sm={12}>
    <InfoItem title="Version" text={sensor.meta.version} />
    <InfoItem title="Hash Address" text={sensor.meta.hash} />
    <InfoItem title="IP Address" text={sensor.meta.ipaddress} />
  </Grid>
);

RightHeader.displayName = 'RightHeader';

RightHeader.propTypes = {
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

export default RightHeader;
