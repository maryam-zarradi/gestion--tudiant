

import { useState } from "react";

function FormulaireEtudiant() {


  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");

  

  const [etudiantAjoute, setEtudiantAjoute] = useState(null);

 
  function ajouterEtudiant(e) {

    e.preventDefault();


    setEtudiantAjoute({
      nom: nom,
      prenom: prenom,
      age: age
    });


    setNom("");
    setPrenom("");
    setAge("");
  }

  return (
    <div>
      <h2>Ajouter un étudiant</h2>

      <form onSubmit={ajouterEtudiant}>

        <input
          type="text"
          placeholder="Saisir nom..."
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <input
          type="text"
          placeholder="Saisir prénom..."
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />

        <input
          type="number"
          placeholder="Saisir âge..."
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">Ajouter</button>

      </form>

      {etudiantAjoute && (
        <div>
          <h3>Étudiant ajouté :</h3>
          <p>Nom : {etudiantAjoute.nom}</p>
          <p>Prénom : {etudiantAjoute.prenom}</p>
          <p>Âge : {etudiantAjoute.age} ans</p>
        </div>
      )}

    </div>
  );
}

export default FormulaireEtudiant;
