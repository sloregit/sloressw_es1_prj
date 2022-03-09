import './style.css';
//rinominati pBtn, pValue, viewBtn : parPosti, parNomi, showNome
//css non richiesto ma utile

//step 5

const parPosti = document.getElementById('parPosti');
const parNomi = document.getElementById('parNomi');

function addBtn(value, index) {
  let showNome = document.createElement('button');
  let aCapo = document.createElement('br');
  showNome.innerHTML = 'P' + (index + 1);
  showNome.value = value != undefined ? value : ''; // x sicurezza
  parPosti.appendChild(showNome);
  parPosti.appendChild(aCapo);
  showNome.addEventListener('click', function () {
    parNomi.innerHTML = this.value;
  });
}

//postiArray.forEach(addBtn);

//step 4
/*
let prenotazioni = new Array();
prenotazioni = postiArray.map(creaB);

function creaB(value, index) {
  prenotazioni[index] = value;
}
*/

//creo le file e le inserisco nella platea
const file = new Array(10).fill('x');

const platea = new Array(10);
platea.map(creaFile());

function creaFile(fila, index) {
  platea[index] = file.map(addBtn);
  console.log(file);
}
console.log(platea);
