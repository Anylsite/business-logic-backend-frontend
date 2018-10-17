/* eslint-disable react/forbid-prop-types */
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  branch, compose, renderNothing, withProps,
} from 'recompose';

const DataTable = ({ data }) => (
  <Grid container direction="column" className="m-v-20">
    <Typography gutterBottom variant="body2" color="textSecondary">
      Sensor Log Data
    </Typography>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Sensor ID</TableCell>
            <TableCell>Temperature</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map(d => (
            <TableRow key={`${d.id}-data`}>
              <TableCell>{d.id}</TableCell>
              <TableCell>{d.sensor_id}</TableCell>
              <TableCell>
                {d.temperature}
                &deg;C
              </TableCell>
              <TableCell>
                <a
                  href={`http://maps.google.com/maps?z=12&t=m&q=loc:${d.current_position.lat}+${d.current_position.long}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {d.current_position.lat}
                  &deg;,
                  {d.current_position.long}
                  &deg;
                </a>
              </TableCell>
              <TableCell>{moment(new Date(d.created_at)).format('MM/DD/YYYY hh:mm A')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </Grid>
);

DataTable.displayName = 'DataTable';

DataTable.propTypes = {
  data: PropTypes.any.isRequired,
};

export default compose(
  connect(
    (state, props) => ({ sensorData: state.Home.sensorData[props.sensorId.toString()] }),
  ),
  branch(
    props => !props.sensorData,
    renderNothing,
  ),
  withProps(props => ({
    data: props.sensorData.data.data,
  })),
)(DataTable);
