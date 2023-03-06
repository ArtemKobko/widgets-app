import clearDay from '../images/clearDay.jpg';
import clearNight from '../images/clearNight.jpg';
import cloudyDay from '../images/cloudyDay.jpg';
import cloudyNight from '../images/cloudyNight.jpg';
import rainyDay from '../images/rainyDay.jpg';
import rainyNight from '../images/rainyNight.jpg';
import snowyDay from '../images/snowyDay.jpg';
import snowyNight from '../images/snowyNight.jpg';
import fog from '../images/fog.jpg';
import thunder from '../images/thunder.jpg';

function getImgByWeatherId(weatherId, time) {
  let image;
  if (weatherId >= 200 && weatherId < 300) {
    image = thunder;
  }
  if ((weatherId >= 300 && weatherId < 600) && (time <= 21 || time >= 5)) {
    image = rainyDay;
  }
  if ((weatherId >= 300 && weatherId < 600) && (time >= 21 || time <= 5)) {
    image = rainyNight;
  }
  if ((weatherId >= 600 && weatherId < 700) && (time <= 21 || time >= 5)) {
    image = snowyDay;
  }
  if ((weatherId >= 600 && weatherId < 700) && (time >= 21 || time <= 5)) {
    image = snowyNight;
  }
  if (weatherId >= 700 && weatherId < 800) {
    image = fog;
  }
  if (weatherId === 800) {
    image = clearDay;
  }
  if (weatherId === 800 && (time >= 21 || time <= 5)) {
    image = clearNight;
  }
  if (weatherId >= 801 && (time <= 21 || time >= 5)) {
    image = cloudyDay;
  }
  if (weatherId >= 801 && (time >= 21 || time <= 5)) {
    image = cloudyNight;
  }
  return image;
}

export default getImgByWeatherId;
