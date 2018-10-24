import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const EventLogs = ({ sensors }) => (
  <Grid item md={4} sm={12} xs={12}>
    {sensors.length > 0 && (
      <div>
        <Typography variant="subheading">
          Sensor Firmware Update Events
        </Typography>
        <ul className="p-h-20">
          {sensors.length > 0 && sensors.sort(
            (a, b) => new Date(b.meta.last_updated) - new Date(a.meta.last_updated),
          ).map(s => (
            <li key={s.meta.hash} className="p-b-10">
              <Typography component="span">
                {moment(new Date(s.meta.last_updated)).format('dddd, Do MMMM YYYY')}
              </Typography>
              <Typography variant="caption" component="span">
                {s.name}
                {' at '}
                {s.meta.company}
                {' '}
                updated to version
                {' v'}
                {s.meta.version}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    )}
  </Grid>
);

EventLogs.displayName = 'RightInfoHeader';

EventLogs.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};

export default EventLogs;
