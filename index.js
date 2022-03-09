import './style.css';
//rinominati pBtn, pValue, viewBtn : parPosti, parNomi, showNome
//css non richiesto ma utile

//step 3 array di 10 tasti, ognuno visualizza il proprio valore

const parPosti = document.getElementById('parPosti');
const parNomi = document.getElementById('parNomi');

let postiArray = new Array(10).fill('');

postiArray[0] = 'Dylan';
postiArray[1] = undefined;
postiArray[2] = 'Groucho';
postiArray[3] = undefined;
postiArray[4] = 'Bloch';

function addBtn(value, index) {
  let showNome = document.createElement('button');
  showNome.innerHTML = 'P' + (index + 1);
  showNome.value = value != undefined ? value : ''; // x sicurezza
  parPosti.appendChild(showNome);
  showNome.addEventListener('click', function () {
    parNomi.innerHTML = this.value;
  });
}

postiArray.map(addBtn);

//postiArray.forEach(addBtn);

//step 4
/*
let prenotazioni = new Array();
prenotazioni = postiArray.map(creaB);

function creaB(value, index) {
  prenotazioni[index] = value;
}
*/
