import React from 'react';
import PropTypes from 'prop-types';
import SelectAutoWidth from './DropDown';
import imgSwitch from '../../utils/imgSwitch';
import SimpleSlider from './Slider/Slider';
import styles from './Widget.module.scss';
import { deleteWidget } from '../../models/widgets/actions';
import getTimeZone from '../../utils/getTimeZone';

class Widget extends React.PureComponent {
  constructor(props) {
    super(props);
    const { city } = this.props;
    this.state = {
      currentTime: getTimeZone(city),
    };
  }

  componentDidMount() {
    const { city } = this.props;
    this.interval = setInterval(() => {
      const newTime = getTimeZone(city);
      this.setState({ currentTime: newTime });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { city } = this.props;
    if (prevProps.city !== city) {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        const newTime = getTimeZone(city);
        this.setState({ currentTime: newTime });
      }, 1000);
      const newTime = getTimeZone(city);
      this.setState({ currentTime: newTime });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { city } = this.props;
    const { newsData } = this.props;
    const { weatherData } = this.props;
    const { currentTime } = this.state;
    const { id } = this.props;
    const { dispatch } = this.props;

    const closeWidget = (event) => {
      event.preventDefault();
      dispatch(deleteWidget(event.target.id));
    };

    return (
      <div className={styles.widget}>
        <div style={{ backgroundImage: `url(${imgSwitch(weatherData.weather[0].id, currentTime)})` }} className={styles.widget}>
          <div className={styles.widgetProperties}>
            <SelectAutoWidth defaultCity={city} id={id} />
            <div>{currentTime}</div>
            <div>
              {weatherData.weather[0].main}
            </div>
            <div>
              {Math.round(weatherData.main.temp - 273)}
              &#8451;
            </div>
          </div>
          <button type="button" id={id} onClick={(event) => closeWidget(event)} className={styles.closeButton}>X</button>
        </div>
        <SimpleSlider news={newsData} />
      </div>

    );
  }
}
Widget.propTypes = {
  city: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  newsData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  weatherData: PropTypes.shape().isRequired,
};

export default (Widget);
