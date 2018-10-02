/* eslint-disable react/forbid-prop-types */
import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import ReactHighcharts from 'react-highcharts';
import { connect } from 'react-redux';
import {
  branch, compose, renderNothing, withProps,
} from 'recompose';

const MonthWiseEvents = ({ config }) => (
  <ReactHighcharts config={config} />
);

MonthWiseEvents.displayName = 'MonthWiseEvents';

MonthWiseEvents.propTypes = {
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
    const data = {};

    sensorData.forEach((s) => {
      const month = moment(new Date(s.created_at)).format('MMM YY');
      if (!data[month]) data[month] = 0;
      data[month] += 1;
    });

    return { graphData: data };
  }),
  withProps(props => ({
    config: {
      chart: { type: 'area' },
      title: { text: 'Month wise Events reported' },
      xAxis: { categories: Object.keys(props.graphData) },
      series: [{ name: 'Month', data: Object.values(props.graphData) }],
    },
  })),
)(MonthWiseEvents);
