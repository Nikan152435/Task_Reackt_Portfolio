import React from 'react';
import PropTypes from 'prop-types';

const ShopCard = ({ product }) => {
  return (
    <div className="shop-card">
      <img src={product.img} alt={product.name} />
      <div className="details">
        <h2>{product.name}</h2>
        <p>{product.color}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};
ShopCard.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
export default ShopCard;
