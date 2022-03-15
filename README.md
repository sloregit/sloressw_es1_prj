Eliminiamo il problema della ripetizione delle strutture: creiamo una classe "ordine" che ci serve a definire un generico ordine di posti. Si tratta di ricopiare il codice all'interno del costruttore della classe ed adattarlo.

Il costruttore prende come parametri:

l'array con i posti già prenotati
il nome dell'elemento HTML che ospita i bottoni
Poi si creano due oggetti con le prenotazioni per i due ordini di posti, uno per la platea e uno per i palchi.

Extra: gli array con i posti prenotati dei due ordini di posti sono ora aggregati in un unico oggetto "teatro". I due array sono inizializzati separatamente. Forse si potrebbe cercare di rendere più semplice creando una classe specifica per gli array contenenti l'ordine dei posti. Cioè, creare una classe "teatro" che ci consenta di scrivere "mioTeatro = new teatro(["platea",6,10],["palchi",4,6])" per creare un oggetto della classe teatro con una platea di 6 file di 10 posti e 4 palchi da sei posti. Potete pensarci o provarci.
