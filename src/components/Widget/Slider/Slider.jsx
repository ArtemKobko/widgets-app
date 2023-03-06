import React from 'react';
import Slider from 'react-slick';
import PropTypes, { shape } from 'prop-types';
import styles from './Slider.module.scss';

class SimpleSlider extends React.PureComponent {
  render() {
    const settings = {
      infinite: false,
      dots: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    const { news } = this.props;
    return (
      <Slider {...settings}>
        {news.map((element) => (
          <div key={element.publishedAt} className={styles.block}>
            <img src={element.image} alt="news img" className={styles.img} />
            <div className={styles.textBlock}>
              <a href={element.url} target="_blank" rel="noreferrer">
                {`${element.title.slice(0, 55)}...`}
                {' '}
                <span>
                  Read more
                </span>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}
SimpleSlider.propTypes = {
  news: PropTypes.arrayOf(shape()).isRequired,
};

export default (SimpleSlider);
