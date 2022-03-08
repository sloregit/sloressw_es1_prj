//step 1 creazione del pulsante
const btn = document.createElement('button');
btn.innerHTML = 'P';
document.body.appendChild(btn);

//step 2 aggiunta di un paragrafo con valore visualizzato al click
const parValue = 'paragrafo dinamico!';
const p1 = document.createElement('p');
document.body.appendChild(p1);

btn.addEventListener('click', () => (p1.innerHTML = parValue));

//step 3 array di 10 tasti, ognuno visualizza il proprio valore

let butArray = new Array(10);
butArray[0] = 'mele';
butArray[1] = 'pere';
butArray[2] = 'susine';
butArray.forEach(creaPar);

function creaPar(value, index) {
  let vbtn = document.createElement('button');
  vbtn.innerHTML = 'P' + index;
  document.body.appendChild(vbtn);
  vbtn.addEventListener('click', showText(this.value));
}

function showText(value) {
  p1.innerHTML = value;
}
