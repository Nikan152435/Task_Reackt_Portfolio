import React from 'react';
import DropdownItem from './DropdownItem';
import PropTypes from 'prop-types';

const DropdownList = ({ items, selectedItem, onItemClick }) => {
  return (
    <div className="dropdown-list">
      {items.map((item) => (
        <DropdownItem
          key={item}
          item={item}
          isSelected={item === selectedItem}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
};
DropdownList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onItemClick: PropTypes.func.isRequired,
};
// DropdownList.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.string).isRequired,
//   selectedItem: PropTypes.string,
//   onItemClick: PropTypes.func.isRequired,
// };

export default DropdownList;
