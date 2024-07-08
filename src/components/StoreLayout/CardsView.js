import React from 'react';
import ShopCard from './ShopCard';
import PropTypes from 'prop-types';

const CardsView = ({ cards }) => {
  return (
    <div className="cards-view">
      {cards.map((product, index) => (
        <ShopCard key={index} product={product} />
      ))}
    </div>
  );
};
CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CardsView;
