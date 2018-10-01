import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import Content from './Content';
import Title from './Title';

const SingleSensor = ({ sensor }) => (
  <Card>
    <CardActionArea style={{ width: '100%' }} href={`/details/${sensor.id}`}>
      <CardContent>
        <Grid container direction="row" alignItems="center" justify="space-between">
          <Grid item sm={10}>
            <Title title={sensor.name} />
            <Typography gutterBottom color="textSecondary">
              {sensor.meta.company}
            </Typography>
            <Content content={sensor.meta.description} />
            <Typography color="textSecondary" component="small">
              Version updated to
              {` v${sensor.meta.version}, `}
              {moment(new Date(sensor.meta.last_updated)).fromNow()}
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography variant="display1">
              312
            </Typography>
            <Typography>
              Events
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </CardActionArea>
  </Card>
);

SingleSensor.displayName = 'SingleSensor';

SingleSensor.propTypes = {
  sensor: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    meta: PropTypes.shape({
      description: PropTypes.string.isRequired,
      last_updated: PropTypes.any,
      company: PropTypes.string,
      hash: PropTypes.string,
      ipaddress: PropTypes.string,
      version: PropTypes.string,
    }),
  }).isRequired,
};

export default SingleSensor;
