// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../../hoc/withStyles';
import styles from '../styles/Spinner.style';

const Spinner = ({ className }) => {
  return (
    <div className={className}>
      <div className="tcp-circle">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
};
Spinner.defaultProps = {
  className: '',
};

export default withStyles(Spinner, styles);
