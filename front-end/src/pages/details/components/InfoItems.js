import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';

const InfoItem = ({ title, text }) => (
  <div className="align-items-left">
    <Typography variant="caption" className="font-sm">{title}</Typography>
    <Typography gutterBottom className="font-sm">{text}</Typography>
  </div>
);

InfoItem.displayName = 'InfoItem';

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default InfoItem;
