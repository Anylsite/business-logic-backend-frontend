import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const InfoGridItem = ({
  text, number, suffix, titleVariant,
}) => (
  <Grid item lg={3} md={6} sm={12} xs={12}>
    <Card>
      <CardContent>
        <Typography align="center" gutterBottom variant={titleVariant} color="primary" component="h1">
          {number}
          {suffix}
        </Typography>
        <Typography align="center" variant="caption" color="textPrimary" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

InfoGridItem.displayName = 'InfoGridItem';

InfoGridItem.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  text: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  titleVariant: PropTypes.string,
};

InfoGridItem.defaultProps = {
  suffix: '',
  titleVariant: 'headline',
};

export default InfoGridItem;
