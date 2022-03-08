//step 1 creazione del pulsante
const btn = document.createElement('button');
btn.innerHTML = 'P';
document.body.appendChild(btn);

//step 2 aggiunta di un paragrafo con valore visualizzato al click
const parValue = 'paragrafo dinamico!';
const p1 = document.createElement('p');
document.body.appendChild(p1);

btn.addEventListener('click', () => (p1.innerHTML = parValue));

//step 3
