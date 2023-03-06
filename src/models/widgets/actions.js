import axios from 'axios';
import { DELETE_WIDGET, UPDATE_WIDGET } from './constants';
import { newsApiKey, weatherApiKey } from '../../constants/apikeys';

export const deleteWidget = (payload) => ({
  type: DELETE_WIDGET,
  payload,
});

export const updateWidget = (payload) => ({
  type: UPDATE_WIDGET,
  payload,
});

export const changeCity = (id, selectedCity) => async (dispatch) => {
  const widget = {
    [id]: {
      city: selectedCity,
    },
  };
  await axios.get(`https://gnews.io/api/v4/search?q=${selectedCity}&apikey=${newsApiKey}`)
    .then((response) => {
      widget[id].newsData = (response.data.articles);
      return widget.newsData;
    });
  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${weatherApiKey}`)
    .then((response) => {
      widget[id].weatherData = (response.data);
      return widget.weatherData;
    });
  dispatch(updateWidget(widget));
};
