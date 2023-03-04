import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { SET_WIDGET, DELETE_WIDGET, UPDATE_WIDGET } from './constants';
import { newsApiKey, weatherApiKey } from '../../utils/constants';

export const setWidget = (payload) => ({
  type: SET_WIDGET,
  payload,
});

export const deleteWidget = (payload) => ({
  type: DELETE_WIDGET,
  payload,
});

export const updateWidget = (payload) => ({
  type: UPDATE_WIDGET,
  payload,
});

export const loadInitialData = (defaultCity) => async (dispatch) => {
  const id = uuidv4();
  const widget = {
    [id]: {
      city: defaultCity,
    },
  };
  await axios.get(`https://newsapi.org/v2/everything?q=${defaultCity}&apiKey=${newsApiKey}`)
    .then((response) => {
      widget[id].newsData = (response.data.articles).slice(0, 12);
      return widget.newsData;
    });
  await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${weatherApiKey}`)
    .then((response) => {
      widget[id].weatherData = (response.data);
      return widget.weatherData;
    });
  dispatch(setWidget(widget));
};

export const changeCity = (id, selectedCity) => async (dispatch) => {
  const widget = {
    [id]: {
      city: selectedCity,
    },
  };
  await axios.get(`https://newsapi.org/v2/everything?q=${selectedCity}&apiKey=${newsApiKey}`)
    .then((response) => {
      widget[id].newsData = (response.data.articles).slice(0, 12);
      return widget.newsData;
    });
  await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${weatherApiKey}`)
    .then((response) => {
      widget[id].weatherData = (response.data);
      return widget.weatherData;
    });
  dispatch(updateWidget(widget));
};
