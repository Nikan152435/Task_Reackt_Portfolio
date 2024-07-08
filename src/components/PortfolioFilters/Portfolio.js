import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

// Импортируем изображения
import image1 from '../../images/filter/200_1.jpg';
import image2 from '../../images/filter/codystretch.jpg';
import image3 from '../../images/filter/dia.jpg';
import image4 from '../../images/filter/emi_haze.jpg';
import image5 from '../../images/filter/mon.jpg';
import image6 from '../../images/filter/place200x290_1.jpg';
import image7 from '../../mages/filter/place200x290_2.jpg';
import image8 from '../../images/filter/place200x290_3.jpg';
import image9 from '../../images/filter/place200x290.jpg';
import image10 from '../../images/filter/the_ninetys_brand.jpg';
import image11 from '../../images/filter/transmission.jpg';
import image12 from '../../images/filter/Triangle_003.jpg';
import image13 from '../../images/filter/Triangle_350x197_1.jpg';
import image14 from '../../images/filter/Triangle_350x197.jpg';

const projects = [
  { id: 1, img: image1, category: 'Websites' },
  { id: 2, img: image2, category: 'Flayers' },
  { id: 3, img: image3, category: 'Business Cards' },
  { id: 4, img: image4, category: 'Websites' },
  { id: 5, img: image5, category: 'Flayers' },
  { id: 6, img: image6, category: 'Business Cards' },
  { id: 7, img: image7, category: 'Websites' },
  { id: 8, img: image8, category: 'Flayers' },
  { id: 9, img: image9, category: 'Business Cards' },
  { id: 10, img: image10, category: 'Websites' },
  { id: 11, img: image11, category: 'Flayers' },
  { id: 12, img: image12, category: 'Business Cards' },
  { id: 13, img: image13, category: 'Websites' },
  { id: 14, img: image14, category: 'Flayers' },
];

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
    };
  }

  onSelectFilter = (filter) => {
    this.setState({ selected: filter });
  };

  filterProjects = () => {
    const { selected } = this.state;
    if (selected === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === selected);
  };

  render() {
    return (
      <div className="portfolio">
        <Toolbar
          filters={['All', 'Websites', 'Flayers', 'Business Cards']}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={this.filterProjects()} />
      </div>
    );
  }
}

export default Portfolio;