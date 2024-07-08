import React from 'react';
import PropTypes from 'prop-types';

const DropdownItem = ({ item, onClick, isSelected }) => {
  return (
    <div
      className={`dropdown-item ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(item)}
    >
      {item.name}
    </div>
  );
};
DropdownItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

// DropdownItem.propTypes = {
//   item: PropTypes.object.isRequired,
//   onClick: PropTypes.func.isRequired,
//   isSelected: PropTypes.bool.isRequired,
// };

export default DropdownItem;
