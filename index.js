import './style.css';

//step 7
const parPlatea = document.getElementById('parPlatea');
const parNomi = document.getElementById('parNomi');
const parPalchi = document.getElementById('parPalchi');

class teatro {
  buttonPosto = document.createElement('button');
  aCapo = document.createElement('br');
  constructor(elem1, elem2) {
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
  showNome.addEventListener('click', Mostra);
  return showNome;
}

function Mostra() {
  parNomi.innerHTML = this.value;
}

const a = new teatro(['platea', 10, 10], ['palco', 4, 6]);
a.assegnaPosto('platea', 'Dylan', 2, 3);
a.assegnaPosto('palco', 'Bloch', 1, 5);
