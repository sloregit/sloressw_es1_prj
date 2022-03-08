//step 1 creazione del pulsante
var btn = document.createElement('button');
btn.innerHTML = 'P';
document.body.appendChild(btn);

//step 2 aggiunta di un paragrafo dinamico con valore da variabile
let parValue = 'paragrafo dinamico!';

parView = () => {
  let p1 = document.createElement('p');
  p1.innerHTML = parValue;
  document.body.appendChild(p1);
};

btn.addEventListener('click', parView);
