import React, { useState } from 'react';
import DropdownList from './DropdownList';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" style={{ position: 'relative' }}>
      <button onClick={toggleDropdown}>
        {selectedItem ? selectedItem : 'Select an item'}
      </button>
      {isOpen && (
        <DropdownList
          items={items}
          selectedItem={selectedItem}
          onItemClick={handleItemClick}
        />
      )}
    </div>
  );
};

export default Dropdown;
