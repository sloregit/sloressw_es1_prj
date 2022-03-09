//step 0 creazione del pulsante con etichetta
const btn = document.createElement('button');
btn.innerHTML = 'P';

//step 1 aggiunta di un paragrafo
//const parValue = 'paragrafo dinamico!';
const p1 = document.getElementById('p1');
p1.appendChild(btn);

//btn.addEventListener('click', () => (p1.innerHTML = parValue));
