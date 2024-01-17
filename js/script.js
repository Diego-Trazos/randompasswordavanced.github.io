//constantes de algoritmo
const algorithm = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
};

let finalAlgorithm = '';
//constantes básicas
const passwordLenghtElement = document.getElementById('input');
const labelLengthElement = document.getElementById('label');
const buttonClickElement = document.getElementById('button');

//constantes selectos de algoritmo
const options = document.getElementById('options');

//output
let output = document.getElementById('output');

const getLength = () => {
  labelLengthElement.textContent = `Length: ${Math.floor(
    passwordLenghtElement.value
  )}`;
};

const changeAlgorithm = () => {
  finalAlgorithm = '';
  if (options.children[0].children[1].checked) {
    finalAlgorithm += algorithm.uppercase;
  }
  if (options.children[1].children[1].checked) {
    finalAlgorithm += algorithm.lowercase;
  }
  if (options.children[2].children[1].checked) {
    finalAlgorithm += algorithm.numbers;
  }
  if (options.children[3].children[1].checked) {
    finalAlgorithm += algorithm.symbols;
  }
};

const printRandomPassword = () => {
  output.textContent = '';
  for (let i = 0; i < Math.floor(passwordLenghtElement.value); i++) {
    const random = Math.floor(Math.random() * finalAlgorithm.length - 1);
    output.textContent += finalAlgorithm.charAt(random);
  }
};

passwordLenghtElement.addEventListener('input', getLength);
buttonClickElement.addEventListener('click', printRandomPassword);

options.addEventListener('change', changeAlgorithm);
