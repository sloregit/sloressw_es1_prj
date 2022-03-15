import './style.css';

//step 6
const parPosti = document.getElementById('parPosti');
const parNomi = document.getElementById('parNomi');
const parPalchi = document.getElementById('palchi');

//dichiarazione numero di file,posti platea/palco
/*const filePlatea = 10;
const postiPlatea = 10;
const filePalco = 4;
const postiPalco = 6;
*/
//new teatro(["platea",6,10],["palchi",4,6])
class teatro {
  constructor(elem1, elem2) {
    this.filePlatea = elem1[1];
    this.postiPlatea = elem1[2];
    this.posizione1 = elem1[0];
    this.filePalco = elem2[1];
    this.postiPalco = elem2[2];
    this.posizione2 = elem2[0];
    this.platea = Array(this.filePlatea)
      .fill(this.posizione1)
      .map(() => Array(this.postiPlatea).fill('x'))
      .map(addBtn, this.posizione1);

    this.palco = Array(this.filePalco)
      .fill(this.posizione2)
      .map(() => Array(this.postiPalco).fill('x'))
      .map(addBtn, this.posizione2);
  }
  prenota(posizione, nome, fila, posto) {
    console.log(this.platea);
    return (this.platea[fila][posto] = nome);
  }
  assegnaPosto(posizione, nome, fila, posto) {
    try {
      if (posizione !== this.posizione1) throw ' "platea" o "palco"';
      if (posizione === this.posizione1) {
        if (fila > this.filePlatea || fila < 1) throw 'fila inesistente';
        if (posto > this.postiPlatea || posto < 1) throw 'posto inesistente';
        return (this.platea[this.filePlatea - 1][this.postiPlatea - 1] = nome);
      }
      if (posizione2 === 'palco') {
        if (fila > this.filePalco || fila < 1) throw 'fila inesistente';
        if (posto > this.postiPalco || posto < 1) throw 'posto inesistente';
        return (this.palco[filePalco - 1][postiPalco - 1] = nome);
      }
    } catch (err) {
      console.log('Errore: ' + err);
    }
  }
}

let a = new teatro(['platea', 5, 5], ['palco', 2, 2]);

a.prenota('platea', 'Simone', 1, 1);

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
  parNomi.innerHTML = this.value;
}
/*
teatro.assegnaPosto('platea', 'Dylan', 1, 1);
teatro.assegnaPosto('Wells', 4, 100); //errore
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
