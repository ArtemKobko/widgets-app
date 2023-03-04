import moment from 'moment-timezone';
import cities from './cities';

function getTimeZone(city) {
  return moment.tz(cities[city]).format('HH:mm:ss');
}

export default getTimeZone;
