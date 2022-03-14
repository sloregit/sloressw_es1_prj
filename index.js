import './style.css';
//step 6
const parPosti = document.getElementById('parPosti');
const parNomi = document.getElementById('parNomi');
const parPalchi = document.getElementById('palchi');

//dichiarazione numero di file,posti platea/palco
const filePlatea = 10;
const postiPlatea = 10;
const filePalco = 4;
const postiPalco = 6;

const teatro = {
  platea: Array(filePlatea)
    .fill('platea')
    .map(() => Array(postiPlatea).fill('x')),
  palco: Array(filePalco)
    .fill('palco')
    .map(() => Array(postiPalco).fill('x')),
  creaPlatea: function () {
    return this.platea.map(addBtn, 'platea');
  },
  creaPalco: function () {
    return this.palco.map(addBtn, 'palco');
  },
  assegnaPosto: function (posizione, nome, fila, posto) {
    try {
      if (posizione !== 'platea' && posizione !== 'palco')
        throw ' "platea" o "palco"';
      if (posizione === 'platea') {
        if (fila > filePlatea || fila < 1) throw 'fila inesistente';
        if (posto > postiPlatea || posto < 1) throw 'posto inesistente';
        return (this.platea[fila - 1][posto - 1] = nome);
      }
      if (posizione === 'palco') {
        if (fila > filePalco || fila < 1) throw 'fila inesistente';
        if (posto > postiPalco || posto < 1) throw 'posto inesistente';
        return (this.palco[fila - 1][posto - 1] = nome);
      }
    } catch (err) {
      console.log('Errore: ' + err);
    }
  },
};

//crea i pulsanti
function addBtn(fila) {
  fila.map((nome, posto) => {
    let showNome = document.createElement('button');
    showNome.className = 'posto';
    let aCapo = document.createElement('br');
    showNome.innerHTML = 'P' + (posto + 1);
    if (this === 'platea') {
      parPosti.appendChild(showNome);
      showNome.className = 'postiPlatea';
      //superata la lunghezza della fila, a capo
      posto + 1 >= fila.length ? parPosti.appendChild(aCapo) : '';
    }
    if (this === 'palco') {
      parPalchi.appendChild(showNome);
      showNome.className = 'postiPalco';
      posto + 1 >= fila.length ? parPalchi.appendChild(aCapo) : '';
    }
    showNome.value = nome != undefined ? nome : ''; // x sicurezza
    showNome.className = nome != 'x' ? 'prenotato' : 'libero';
    showNome.addEventListener('click', Mostra);
    return showNome;
  });
}
function Mostra() {
  console.log(this.value);
  parNomi.innerHTML = this.value;
}

teatro.assegnaPosto('Dylan', 1, 1);
teatro.assegnaPosto('Wells', 4, 100);
teatro.palco[0][4] = 'Wells'; //funziona anche senza assegnaposto
teatro.assegnaPosto('palco', 'Igor', 1, 3);
teatro.assegnaPosto('platea', 'Morgana', 9, 6);
teatro.creaPlatea();
teatro.creaPalco();

/*
const nomiPrenotati = [
  ['Groucho', 1, 2],
  ['Bloch', 7, 45],
  ['Jenny', 3, 35],
];
*/
