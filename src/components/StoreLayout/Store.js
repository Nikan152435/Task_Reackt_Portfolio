import React, { Component } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

const StoreHeader = () => {
  return (
    <div>
      <h2>Store</h2>
    </div>
  );
};

const products = [
  // your products data here
];

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'module', // 'module' or 'list'
    };
  }

  onSwitch() {
    this.setState(({ view }) => ({
      view: view === 'module' ? 'list' : 'module',
    }));
  }

  render() {
    const { view } = this.state;

    // Массив путей к картинкам
    const imagePaths = [
      '../../images/layouts/1.jpg',
      '../../images/layouts/2.jpg',
      '../../images/layouts/3.jpg',
      '../../images/layouts/4.jpg',
      '../../images/layouts/5.jpg',
      '../../images/layouts/7.jpg',
    ];

    return (
      <div className="store">
        <StoreHeader />
        <IconSwitch
          icon={view === 'module' ? 'view_list' : 'view_module'}
          onSwitch={this.onSwitch}
        />
        <div className="images">
          {imagePaths.map((path, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}${path}`}
              alt={`Store Example ${index + 1}`}
            />
          ))}
        </div>
        {view === 'module' ? (
          <CardsView cards={products} />
        ) : (
          <ListView items={products} />
        )}
      </div>
    );
  }
}

export default Store;
