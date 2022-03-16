import './style.css';

//step 9
const parPlatea = document.getElementById('parPlatea');
const parNomi = document.getElementById('parNomi');
const parPalchi = document.getElementById('parPalchi');
const buttonPrenotazioni = document.getElementById('log');

class teatro {
  constructor(elem1, elem2) {
    this.prenotazioni = [];
    this.zona1 = elem1[0];
    this.filePlatea = elem1[1];
    this.postiPlatea = elem1[2];
    this.zona2 = elem2[0];
    this.filePalco = elem2[1];
    this.postiPalco = elem2[2];
    this.teatro = {
      platea: Array(this.filePlatea)
        .fill('filaPlatea')
        .map(() =>
          Array(this.postiPlatea)
            .fill('x')
            .map((val, posto) => {
              return addBtn(val, this.postiPlatea, posto, this.zona1);
            })
        ),
      palco: Array(this.filePalco)
        .fill('filaPlatea')
        .map(() =>
          Array(this.postiPalco)
            .fill('x')
            .map((val, posto) => {
              return addBtn(val, this.postiPalco, posto, this.zona2);
            })
        ),
    };
    this.assegnaPosto = function (zona, nome, fila, posto) {
      if (zona === 'platea') {
        this.teatro.platea[fila - 1][posto - 1].style.backgroundColor = 'red';
        return (this.teatro.platea[fila - 1][posto - 1].value = nome);
      }
      if (zona === 'palco') {
        this.teatro.palco[fila - 1][posto - 1].style.backgroundColor = 'red';
        return (this.teatro.palco[fila - 1][posto - 1].value = nome);
      }
    };
    this.toArray = function () {
      return (this.prenotazioni = [
        this.teatro.platea.map((fila) => fila.map((posto) => posto.value)),
        this.teatro.palco.map((fila) => fila.map((posto) => posto.value)),
      ]);
    };
  }
}

function addBtn(nome, LFila, posto, zona) {
  let showNome = document.createElement('button');
  showNome.className = 'posto';
  let aCapo = document.createElement('br');
  showNome.innerHTML = 'P' + (posto + 1);
  if (zona === 'platea') {
    parPlatea.appendChild(showNome);
    showNome.className = 'postiPlatea';
    //superata la lunghezza della fila, a capo
    posto + 1 >= LFila ? parPlatea.appendChild(aCapo) : '';
  }
  if (zona === 'palco') {
    parPalchi.appendChild(showNome);
    showNome.className = 'postiPalco';
    posto + 1 >= LFila ? parPalchi.appendChild(aCapo) : '';
  }
  showNome.value = nome != undefined ? nome : ''; // x sicurezza
  showNome.className = nome != 'x' ? 'prenotato' : 'libero';
  showNome.addEventListener('click', mostraNome);
  return showNome;
}

function mostraNome() {
  if (prenotazione.value) {
    this.value = prenotazione.value;
    this.style.backgroundColor = 'red';
    prenotazione.value = '';
  }
  parNomi.innerHTML = this.value;
}

function vediPrenotazioni() {
  console.log(a.toArray());
}

const a = new teatro(['platea', 10, 10], ['palco', 4, 6]);
a.assegnaPosto('platea', 'Dylan', 2, 3);
a.assegnaPosto('palco', 'Bloch', 1, 5);
buttonPrenotazioni.addEventListener('click', vediPrenotazioni);
