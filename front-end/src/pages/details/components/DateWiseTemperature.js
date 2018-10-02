/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import connect from 'react-redux/es/connect/connect';
import {
  branch, compose, renderNothing, withProps,
} from 'recompose';

const DateWiseTemperatureEvents = ({ config }) => (
  <ReactHighcharts config={config} />
);

DateWiseTemperatureEvents.displayName = 'DateWiseTemperatureEvents';

DateWiseTemperatureEvents.propTypes = {
  config: PropTypes.object.isRequired,
};

export default compose(
  connect(
    (state, ownProps) => ({ sensorData: state.Home.sensorData[ownProps.sensorId] }),
  ),
  branch(
    props => !props.sensorData,
    renderNothing,
  ),
  withProps((props) => {
    const sensorData = props.sensorData.data.data.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at),
    );

    const graphData = {};
    sensorData.forEach((s) => {
      graphData[new Date(s.created_at)] = s.temperature;
    });

    return { graphData };
  }),
  withProps(props => ({
    config: {
      chart: { type: 'area' },
      title: { text: 'Sensor Temperature Changes' },
      xAxis: { categories: Object.keys(props.graphData) },
      series: [{ name: 'Date', data: Object.values(props.graphData) }],
    },
  })),
)(DateWiseTemperatureEvents);
