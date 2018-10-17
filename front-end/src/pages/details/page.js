/* eslint-disable react/forbid-prop-types */
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose';
import { bindActionCreators } from 'redux';
import { Layout } from '../../components';

import { fetchSensorData, fetchSingleSensor } from '../home/actions';
import InfoGrid from './components/InfoGrid';
import LeftHeader from './components/LeftHeader';
import RightHeader from './components/RightHeader';
import DataTable from './components/DataTable';
import Graphs from './components/Graphs';

const DetailsPage = ({
  processing, sensor, sensorData, sensorId,
}) => (
  <Grid container>
    {processing && !sensor && (
      <Grid item className="m-v-20 center-align">
        <CircularProgress color="secondary" size={50} />
        <Typography align="center" component="p" className="p-v-10" color="secondary">
          Preparing Sensor Data...
        </Typography>
      </Grid>
    )}
    {!processing && sensor && ([
      <Grid key="detailsHeader" container direction="row">
        <LeftHeader sensor={sensor} />
        <RightHeader sensor={sensor} />
      </Grid>,
      <InfoGrid key="detailsInfo" sensorData={sensorData} />,
      <Graphs key="detailsGraphs" sensorId={sensorId} />,
      <DataTable key="detailsDataTable" sensorId={sensorId} />,
    ])}
  </Grid>
);

DetailsPage.displayName = 'DetailsPage';

DetailsPage.propTypes = {
  processing: PropTypes.bool.isRequired,
  sensor: PropTypes.any.isRequired,
  sensorData: PropTypes.any.isRequired,
  sensorId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default compose(
  withProps(props => ({
    showBackButton: true,
    sensorId: props.match.params.sensorId,
  })),
  Layout,
  connect(
    (state, ownProps) => ({
      processing: state.Home.fetchingSensorData.processing,
      sensor: state.Home.sensors.filter(
        s => s.id.toString() === ownProps.match.params.sensorId.toString(),
      )[0],
      sensorData: state.Home.sensorData[ownProps.match.params.sensorId.toString()],
    }),
    dispatch => bindActionCreators({ fetchSensorData, fetchSingleSensor }, dispatch),
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchSingleSensor(this.props.match.params.sensorId);
      this.props.fetchSensorData(this.props.match.params.sensorId);
    },
  }),
)(DetailsPage);
