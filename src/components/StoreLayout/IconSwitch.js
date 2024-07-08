import React from 'react';
import PropTypes from 'prop-types';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="icon-switch">
      <i className="material-icons" onClick={onSwitch}>
        {icon}
      </i>
    </div>
  );
};
IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};
export default IconSwitch;
