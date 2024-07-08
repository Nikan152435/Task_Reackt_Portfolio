import React from 'react';
import ShopItem from './ShopItem';
import PropTypes from 'prop-types';

const ListView = ({ items }) => {
  return (
    <div className="list-view">
      {items.map((product, index) => (
        <ShopItem key={index} product={product} />
      ))}
    </div>
  );
};
ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ListView;
