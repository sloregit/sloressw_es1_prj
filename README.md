Costruiamo un array di array di stringhe, con le stesse proprietà dette prima. Il questo modo avremo i posti prenotati nella "platea" del nostro teatro. In corrispondenza avremo un array di array di bottoni, creato utilizzando i nomi contenuti nel primo.

Per creare l'array bidimensionale di stringhe inizializziamo un array corrispondente alle file, e a ciascuna fila facciamo corrispondere un array di stringhe ("x" per il posto libero).
-ok-
Poi eseguiamo due operazioni di map annidate: una per costruire l'array di file, e ciascuna fila costituita da tasti con la proprietà "value" corrispondente alla stringa nella cella corrispondente dell'array.
-ok-
I bottoni sono sistemati per file consecutive, separando ciascuna con un elemento "br" (document.createElement('br')).
-ok-
Notare che, per costruire il nome del posto (ad es. "P43") ambedue gli indici devono essere visibili nel map più interno che costruisce il bottone corrispondente al singolo posto.
-ok-
