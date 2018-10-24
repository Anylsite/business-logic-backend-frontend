import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';

import { fetchSensorData } from '../actions';
import Content from './Content';
import Title from './Title';

const SingleSensor = ({ sensor, sensorData }) => (
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
          </Grid>
          <Grid item sm={2}>
            {sensorData && !sensorData.processing && (
              <div>
                <Typography align="center" color="primary" variant="display1">
                  {sensorData.data.count.toString()}
                </Typography>
                <Typography align="center" component="p" color="textSecondary">
                  Events
                </Typography>
              </div>
            )}
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
  sensorData: PropTypes.shape({
    processing: PropTypes.bool,
    data: PropTypes.shape({
      status: PropTypes.string,
      count: PropTypes.number,
      data: PropTypes.any,
    }),
  }),
};

SingleSensor.defaultProps = {
  sensorData: {
    processing: true,
  },
};

export default compose(
  connect(
    (state, ownProps) => ({
      sensorData: state.Home.sensorData[ownProps.sensor.id],
    }),
    dispatch => bindActionCreators({ fetchSensorData }, dispatch),
  ),
  lifecycle({
    componentDidMount() {
      if (!this.props.sensorData || this.props.sensorData.processing === false) {
        this.props.fetchSensorData(this.props.sensor.id);
      }
    },
  }),
)(SingleSensor);
