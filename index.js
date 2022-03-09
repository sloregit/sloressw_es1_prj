//step 1 creazione del pulsante
/*const btn = document.createElement('button');
btn.innerHTML = 'P';
document.body.appendChild(btn);

//step 2 aggiunta di un paragrafo con valore visualizzato al click
const parValue = 'paragrafo dinamico!';
const p1 = document.createElement('p');
document.body.appendChild(p1);

btn.addEventListener('click', () => (p1.innerHTML = parValue));
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
document.body.appendChild(p1);

//step 4
