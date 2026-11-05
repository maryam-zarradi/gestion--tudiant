
import { useState } from "react";

function Compteur() {
  const [compteur, setCompteur] = useState(0);

  function incrementer() {
    setCompteur(compteur + 1);
  }

  function decrementer() {
    setCompteur(compteur - 1);
  }

  function reinitialiser() {
    setCompteur(0);
  }

  return (
    <div>
      <h2>Mon compteur</h2>

      <p>Compteur : {compteur}</p>

      <button onClick={incrementer}>
        Incrémenter
      </button>

      <button onClick={decrementer}>
        Décrémenter
      </button>

      <button onClick={reinitialiser}>
        Remise à zéro
      </button>
    </div>
  );
}

export default Compteur;

