import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';

import { Layout } from '../../components';
import { fetchSensors } from './actions';
import SingleSensor from './components/SingleSensor';
import EventLogs from './components/EventLogs';

const Page = ({ processing, sensors }) => (
  <div>
    <div className="m-b-20">
      <Typography align="left" variant="headline" component="h1">
        Sensors Dashboard
      </Typography>
      <Typography gutterBottom variant="caption" component="p">
        Representing data till&nbsp;
        {moment().format('Do MMMM YYYY hh:mm A')}
      </Typography>
    </div>
    {processing && sensors.length === 0 && (
      <div className="m-v-20 center-align">
        <CircularProgress color="secondary" size={50} />
        <Typography align="center" component="p" className="p-v-10" color="secondary">
          Gathering required information...
        </Typography>
      </div>
    )}
    <Grid container spacing={16}>
      <Grid item md={8} sm={12} xs={12}>
        {sensors.length > 0 && sensors.map(s => (
          <div key={s.meta.hash} className="p-b-10">
            <SingleSensor sensor={s} />
          </div>
        ))}
      </Grid>
      <EventLogs sensors={sensors} />
    </Grid>
  </div>
);

Page.propTypes = {
  processing: PropTypes.bool.isRequired,
  sensors: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default compose(
  Layout,
  connect(
    state => ({ sensors: state.Home.sensors, processing: state.Home.isProcessing }),
    dispatch => bindActionCreators({ fetchSensors }, dispatch),
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchSensors();
    },
  }),
)(Page);
