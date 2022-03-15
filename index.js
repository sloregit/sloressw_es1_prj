import './style.css';

//step 6
const parPlatea = document.getElementById('parPosti');
const parNomi = document.getElementById('parNomi');
const parPalchi = document.getElementById('palchi');

//new teatro(["platea",6,10],["palchi",4,6])
class teatro {
  buttonPosto = document.createElement('button');
  aCapo = document.createElement('br');
  constructor(elem1, elem2) {
    this.platea = {
      elem1: Array(elem1[1])
        .fill('filaPlatea')
        .map((val, fila) =>
          Array(elem1[2])
            .fill('postoPlatea')
            .map((val, posto) => {
              'ew';
            })
        ),
    };
    this.palco = {
      elem2: Array(elem2[1])
        .fill('filaPlatea')
        .map(() => Array(elem2[2]).fill('postoPalco')),
    };
  }
}

function foo() {
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
}
let a = new teatro(['platea', 5, 3], ['palco', 6, 8]);
console.log(a);
