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
