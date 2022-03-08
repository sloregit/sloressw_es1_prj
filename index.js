//step 1 creazione del pulsante
const btn = document.createElement('button');
btn.innerHTML = 'P';
document.body.appendChild(btn);

//step 2 aggiunta di un paragrafo dinamico con valore da variabile
const parValue = 'paragrafo dinamico!';
const p1 = document.createElement('p');
document.body.appendChild(p1);
parView = () => (p1.innerHTML = parValue);

btn.addEventListener('click', parView);
