import './style.css';
//rinominati pBtn, pValue, viewBtn : parPosti, parNomi, showNome
//css non richiesto ma utile

//step 5

const parPosti = document.getElementById('parPosti');
const parNomi = document.getElementById('parNomi');

function addBtn(value, index) {
  let showNome = document.createElement('button');
  let aCapo = document.createElement('br');
  //this * 10 per avere il numero del posto
  showNome.innerHTML = 'P' + (index + 1 + this * 10);
  showNome.value = value != undefined ? value : ''; // x sicurezza
  parPosti.appendChild(showNome);
  index >= 9 ? parPosti.appendChild(aCapo) : '';
  //

  showNome.addEventListener('click', function () {
    parNomi.innerHTML = this.value;
  });
}

//creo le file e le inserisco nella platea
const file = new Array(10).fill('x');
const platea = new Array(10).fill('');

function creaFile(fila, index) {
  //index = this. nella callback
  return (platea[index] = file.map(addBtn, index));
}
platea.map(creaFile);
platea[0][7] = 'Chiarbi';
console.log(platea);
