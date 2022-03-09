//step 0 creazione del pulsante
const btn = document.createElement('button');
btn.innerHTML = 'P';
document.body.appendChild(btn);

//step 1 aggiunta di un paragrafo con valore visualizzato al click
const parValue = 'paragrafo dinamico!';
const p1 = document.getElementById('p1');
document.body.appendChild(p1);

btn.addEventListener('click', () => (p1.innerHTML = parValue));

const p2 = document.createElement('p');
document.body.appendChild(p1);
