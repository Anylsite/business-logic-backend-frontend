import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MonthWiseEvents from './MonthWiseEvents';
import DateWiseTemperature from './DateWiseTemperature';

const Graphs = ({ sensorId }) => (
  <Grid container className="m-v-20" direction="row" spacing={16}>
    <Grid item lg={6} md={6} sm={12} xs={12}>
      <Paper className="p-10">
        <MonthWiseEvents sensorId={sensorId} />
      </Paper>
    </Grid>
    <Grid item lg={6} md={6} sm={12} xs={12}>
      <Paper className="p-10">
        <DateWiseTemperature sensorId={sensorId} />
      </Paper>
    </Grid>
  </Grid>
);

Graphs.displayName = 'Graphs';

Graphs.propTypes = {
  sensorId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Graphs;
