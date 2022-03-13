import './style.css';
//rinominati pBtn, pValue, viewBtn : parPosti, parNomi, showNome
//css non richiesto ma utile

//step 6
//aggancio i paragrafi
//meglio <div>?
const parPosti = document.getElementById('parPosti');
const parNomi = document.getElementById('parNomi');
const parPalchi = document.getElementById('palchi');
//dichiarazione file,posti platea/palco
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
  creaPlatea: function (spazio) {
    return this.platea.map(addBtn, 'platea');
  },
  creaPalco: function () {
    return this.palco.map(addBtn, 'palco');
  },
  assegnaPosto: function (posizione, nome, fila, posto) {
    if (posizione === 'platea') {
      this.platea[fila + 1][posto + 1] = nome;
      console.log(this.platea);
    }
    if (posizione === 'palco') {
      this.palco[fila][posto] = nome;
      console.log(this.palco);
    }
    return this.posizione;
  },
};
teatro.platea[0][2] = 'we';

//platea.map(InsertFile);

teatro.assegnaPosto('palco', 'Igor', 0, 5);
teatro.creaPlatea();
teatro.creaPalco();

//inserisce i pulsanti in platea o palco
function addBtn(value, index) {
  value.map((nome, posto) => {
    console.log(nome, posto, index);
    //creo il bottone e gli assegno una classe
    let showNome = document.createElement('button');
    showNome.className = 'posto';
    let aCapo = document.createElement('br');
    //indice della platea/palco * 10 per avere il numero del posto
    showNome.innerHTML = 'P' + (posto + 1);
    if (this === 'platea') {
      parPosti.appendChild(showNome);
      showNome.className = 'postoPlatea';
      posto + 1 >= value.length ? parPosti.appendChild(aCapo) : ''; //fila di 10
    }
    if (this === 'palco') {
      parPalchi.appendChild(showNome);
      showNome.className = 'postoPalco';
      posto + 1 >= value.length ? parPalchi.appendChild(aCapo) : ''; //fila di 6
    }
    showNome.value = nome != undefined ? nome : ''; // x sicurezza
    showNome.addEventListener('click', function () {
      console.log(this);
      parNomi.innerHTML = this.value;
    });
  });
}

/*
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
