//import imgPick from './images/pick.png';

//const pick = document.getElementById('pick').src = imgPick;

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