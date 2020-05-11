import './scripts/css';

import imgLogo from './images/logo.png';
import imgSun from './images/sun.png';
import imgDog from './images/dog.png';
import imgWateringcan from './images/wateringcan.png';
import imgNoResult from './images/illustration.png';
import imgPick from './images/pick.png';

const logo = document.getElementById('logo').src = imgLogo;
const sun = document.getElementById('sunlight').src = imgSun;
const water = document.getElementById('chew').src = imgDog;
const dog = document.getElementById('water').src = imgWateringcan;
const noResult = document.getElementById('imgNoResult').src = imgNoResult;
const pick = document.getElementById('pick').src = imgPick;

const sunList = ['high', 'low', 'no'];
const waterList = ['false', 'true'];
const dogList = ['daily', 'regularly', 'rarely'];

const selectSun = document.getElementById('selectSun');
createSelectOption(selectSun, sunList);

const selectWater = document.getElementById('selectWater');
createSelectOption(selectWater, waterList);

const selectChew = document.getElementById('selectChew');
createSelectOption(selectChew, dogList);

function createSelectOption(select, arr) {
  arr.forEach((item, i) => {
    let option = document.createElement('option');
    option.value = i;
    option.text = item;

    select.appendChild(option);
  });
}