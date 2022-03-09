/*
//step 0 creazione del pulsante con etichetta
const btn = document.createElement('button');
btn.innerHTML = 'P';

//step 1 aggiunta di un paragrafo
const p1 = document.getElementById('p1');
p1.appendChild(btn);

//step 2 aggiunto paragrafo con valore visualizzato al click
const p2 = document.createElement('p2');
document.body.appendChild(p2);
const parValue = 'paragrafo dinamico!';

btn.addEventListener('click', () => (p2.innerHTML = parValue));

*/

//step 3 array di 10 tasti, ognuno visualizza il proprio valore

let butnArray = new Array(10);
butnArray[0] = 'Dylan';
butnArray[1] = undefined;
butnArray[2] = 'Groucho';
butnArray[3] = undefined;
butnArray[4] = 'Bloch';

function addBtn(value, index) {
  let vbtn = document.createElement('button');
  vbtn.innerHTML = 'P' + index;
  vbtn.value = value != undefined ? value : '';
  document.body.appendChild(vbtn);
  vbtn.addEventListener('click', function () {
    p1.innerHTML = this.value;
  });
}
butnArray.forEach(addBtn);

const p1 = document.createElement('p');
p1.id = 'p1';
document.body.appendChild(p1);

//step 4
