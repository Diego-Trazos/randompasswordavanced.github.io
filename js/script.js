//Elementos DOM
const passwordLenghtElement = document.getElementById('input');
const labelLengthElement = document.getElementById('label');
const buttonClickElement = document.getElementById('button');
const options = document.getElementById('options');
let output = document.getElementById('output');

//constantes de algoritmo
const algorithm = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
};

const keysArray = Object.keys(algorithm);

let finalAlgorithm = '';

//Funciones
const getLength = () => {
  labelLengthElement.textContent = `Length: ${Math.floor(
    passwordLenghtElement.value
  )}`;
};

const disabledButton = isActiveDisabled => {
  buttonClickElement.disabled = isActiveDisabled;
};

const changeAlgorithm = value => {
  finalAlgorithm = '';
  let checkActive = true;
  for (let i = 0; i < 4; i++) {
    if (options.children[i].children[1].checked) {
      finalAlgorithm += algorithm[keysArray[i]];
      checkActive = false;
    }
  }
  disabledButton(checkActive);
};

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * finalAlgorithm.length - 1);
  return randomNumber;
};

const printRandomPassword = () => {
  output.textContent = '';
  for (let i = 0; i < Math.floor(passwordLenghtElement.value); i++) {
    const random = generateRandomNumber();
    output.textContent += finalAlgorithm.charAt(random);
  }
};

//Eventos
passwordLenghtElement.addEventListener('input', getLength);
buttonClickElement.addEventListener('click', printRandomPassword);
options.addEventListener('change', changeAlgorithm);
