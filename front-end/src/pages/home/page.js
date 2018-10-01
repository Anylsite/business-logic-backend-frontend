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
    <Grid container sm={12} spacing={16}>
      <Grid item md={8} sm={12}>
        {sensors.length > 0 && sensors.map(s => (
          <div key={s.meta.hash} className="p-b-10">
            <SingleSensor sensor={s} />
          </div>
        ))}
      </Grid>
      <Grid item md={4} sm={12}>
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
                  <Typography variant="caption" component="span">
                    {moment(new Date(s.meta.last_updated)).format('dddd, Do MMMM YYYY')}
                  </Typography>
                  <Typography component="span">
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
