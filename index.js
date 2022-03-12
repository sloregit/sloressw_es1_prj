import './style.css';
//rinominati pBtn, pValue, viewBtn : parPosti, parNomi, showNome
//css non richiesto ma utile

//step 6
//aggiungo i palchi
const parPosti = document.getElementById('parPosti');
const parNomi = document.getElementById('parNomi');
const parPalchi = document.getElementById('palchi');

function addBtn(value, index) {
  //creo il bottone e gli assegno una classe
  let showNome = document.createElement('button');
  showNome.className = 'posto';
  let aCapo = document.createElement('br');
  //this(indice della platea) * 10 per avere il numero del posto
  showNome.innerHTML = 'P' + (index + 1 + this * 10);
  showNome.value = value != undefined ? value : ''; // x sicurezza
  parPosti.appendChild(showNome);
  index >= 9 ? parPosti.appendChild(aCapo) : ''; //fila di 10
  showNome.addEventListener('click', function () {
    parNomi.innerHTML = this.value;
  });
  return showNome;
}
//creo gli array per le file e le inserisco nella platea
const file = Array(10).fill('x');
const platea = new Array(10).fill('x');
const filePalco = new Array(6).fill('y');

const filePlatea = 10;

const teatro = {
  platea: Array(filePlatea)
    .fill('')
    .map(() => {
      Array(file).fill('x');
    }),
  palchi: Array(filePlatea)
    .fill('')
    .map(() => {
      Array(file).fill('y');
    }),
};

function InsertFile(fila, index) {
  //index = this. nella callback
  return (platea[index] = file.map(addBtn, index));
}
platea.map(InsertFile);
palchi.map(InsertFile);
console.log(palchi);
function assegnaPosto(prenotazione, fila, posto) {
  //assegna il valore al tasto/i e lo/li salva in platea
  try {
    if (Array.isArray(prenotazione) == false) {
      //se è una prenotazione singola
      if (fila === 0) {
        fila = 1; //non esiste la fila 0
      }
      if (posto === 0) {
        posto = 1; // non esiste la fila 1
      }
      if (fila > file.length) {
        alert('Fila inesistente');
      }
      if (posto > platea.length * 10) {
        alert('Posto inesistente');
      }
      //assegno il valore al tasto individuato con className
      document.getElementsByClassName('posto')[posto - 1].value = prenotazione;
      return (platea[fila - 1][posto - 1] = prenotazione);
    } else if (Array.isArray(prenotazione) == true) {
      //se è un gruppo di prenotazioni da aggiungere, per ogni persona:
      for (let persona in prenotazione) {
        if (prenotazione[1] === 0) {
          prenotazione[1] = 1;
        }
        if (prenotazione[2] === 0) {
          prenotazione[2] = 1;
        }
        if (prenotazione[1] > file.length) {
          alert('Fila inesistente');
        }
        if (prenotazione[2] > platea.length * 10) {
          alert('Posto inesistente');
        }
        document.getElementsByClassName('posto')[
          prenotazione[persona][2] - 1
        ].value = prenotazione[persona][0];
        platea[prenotazione[persona][1]].value = prenotazione[persona][0];
      }
      return platea;
    }
  } catch (err) {
    alert(
      'errore: ' + err + ' probabilmente hai selezionato un posto inesistente'
    );
  }
}

//Per assegnare i posti, sia singolarmente che in gruppo
assegnaPosto('Dylan', 1, 1);

assegnaPosto('Wells', 4, 100);
//fila ancora inutilizzata, utilizzato solo il posto
const nomiPrenotati = [
  ['Groucho', 1, 2],
  ['Bloch', 7, 45],
  ['Jenny', 3, 35],
];

assegnaPosto(nomiPrenotati);
