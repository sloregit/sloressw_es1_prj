//step 0 creazione del pulsante
const btn = document.createElement('button');
btn.innerHTML = 'P';

//step 1 aggiunta di un paragrafo
const parValue = 'paragrafo dinamico!';
const p1 = document.getElementById('p1');
p1.appendChild(btn);

const p2 = document.createElement('p2');
document.body.appendChild(p1);

btn.addEventListener('click', () => (p2.innerHTML = parValue));
