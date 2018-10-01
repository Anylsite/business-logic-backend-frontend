import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import { compose, withProps } from 'recompose';
import maxBy from 'lodash/maxBy';
import minBy from 'lodash/minBy';

import InfoGridItem from './InfoGridItem';

const InfoGrid = ({
  count, maxTemperature, minTemperature, latestTemperature,
}) => (
  <Grid container spacing={16} className="p-v-20">
    <InfoGridItem
      text="Total Events"
      number={count}
    />
    <InfoGridItem
      text="Max Temperature"
      number={maxTemperature}
      suffix="&deg;C"
    />
    <InfoGridItem
      text="Min Temperature"
      number={minTemperature}
      suffix="&deg;C"
    />
    <InfoGridItem
      text="Current Temperature"
      number={latestTemperature}
      suffix="&deg;C"
    />
  </Grid>
);

InfoGrid.propTypes = {
  sensorData: PropTypes.shape({
    processing: PropTypes.bool,
    data: PropTypes.shape({
      status: PropTypes.string,
      count: PropTypes.number,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        sensor_id: PropTypes.number,
        temperature: PropTypes.number,
        current_position: PropTypes.shape({ lat: PropTypes.string, long: PropTypes.string }),
        created_at: PropTypes.string,
      })),
    }),
  }).isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  maxTemperature: PropTypes.number.isRequired,
  minTemperature: PropTypes.number.isRequired,
  latestTemperature: PropTypes.number.isRequired,
};

export default compose(
  withProps(props => ({
    count: props.sensorData.data.count,
    maxTemperature: maxBy(props.sensorData.data.data, s => s.temperature).temperature,
    minTemperature: minBy(props.sensorData.data.data, s => s.temperature).temperature,
    latestTemperature: props.sensorData.data.data.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at),
    )[0].temperature,
  })),
)(InfoGrid);
