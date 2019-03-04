import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';

const items = [
  {
    src: 'static/img/banner/fantasticBeasts.jpg',
    altText: 'Slide 1',
    link: '/'
  },
  {
    src: 'static/img/banner/smallfoot.jpg',
    altText: 'Slide 2',
    link: '/'
  },
  {
    src: 'static/img/banner/bohemianRhapsody.jpg',
    altText: 'Slide 3',
    link: '/'
  }
];

class HomePageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <Link to={item.link}>
            <img className="d-block w-100" src={item.src} alt={item.altText} />
          </Link>
        </CarouselItem>
      ));

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default HomePageSlider;
