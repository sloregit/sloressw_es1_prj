import './style.css';
//rinominati p1,p2,btn : pBtn, pValue, viewBtn
//css non richiesto ma utile

//step 3 array di 10 tasti, ognuno visualizza il proprio valore

const pBtn = document.getElementById('pBtn');
const pValue = document.getElementById('pValue');

let butnArray = new Array(10);
butnArray.fill(''); //evita undefined
butnArray[0] = 'Dylan';
butnArray[1] = undefined;
butnArray[2] = 'Groucho';
butnArray[3] = undefined;
butnArray[4] = 'Bloch';

function addBtn(value, index) {
  let viewBtn = document.createElement('button');
  viewBtn.innerHTML = 'P' + (index + 1);
  viewBtn.value = value != undefined ? value : ''; // x sicurezza
  pBtn.appendChild(viewBtn);
  viewBtn.addEventListener('click', function () {
    pValue.innerHTML = this.value;
  });
}
butnArray.forEach(addBtn);
