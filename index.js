import './style.css';
//css non richiesto ma utile
console.log('platea non restituisce un array di bottoni');
//step 6
//aggancio i paragrafi
//meglio <div>?
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
    .map(() => Array(postiPlatea).fill('postoPlatea')),
  palco: Array(filePalco)
    .fill('palco')
    .map(() => Array(postiPalco).fill('postoPalco')),
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
        if (fila > filePlatea) throw 'fila inesistente';
        if (posto > postiPlatea) throw 'posto inesistente';
        return (this.platea[fila][posto] = nome);
        // this.platea[fila][posto].className = 'prenotato';
      }
      if (posizione === 'palco') {
        if (fila > filePalco) throw 'fila inesistente';
        if (posto > postiPalco) throw 'posto inesistente';
        return (this.palco[fila][posto] = nome);
        //  this.palco[fila][posto].className = 'prenotato';
      }
    } catch (err) {
      console.log('Errore: ' + err);
    }
  },
};
teatro.palco[0][3] = 'ciao';
teatro.assegnaPosto('palco', 'Igor', 0, 3);
console.log(teatro.palco);
teatro.assegnaPosto('platea', 'Morgana', 0, 6);
console.log(teatro.platea);
teatro.creaPlatea();
teatro.creaPalco();

//inserisce i pulsanti in platea o palco
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
    showNome.addEventListener('click', Mostra); //() {
    //console.log(this.value);
    //parNomi.innerHTML = this.value;
    //});
    return showNome;
  });
}

function Mostra() {
  console.log(this.value);
  parNomi.innerHTML = this.value;
}
/*

vecchio codice 


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
/*assegnaPosto('Dylan', 1, 1);

assegnaPosto('Wells', 4, 100);
//fila ancora inutilizzata, utilizzato solo il posto
const nomiPrenotati = [
  ['Groucho', 1, 2],
  ['Bloch', 7, 45],
  ['Jenny', 3, 35],
];

assegnaPosto(nomiPrenotati);
*/
