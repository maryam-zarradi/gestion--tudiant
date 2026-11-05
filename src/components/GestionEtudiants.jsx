
import { useState } from "react";

function GestionEtudiants() {

 
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");

 
  const [etudiants, setEtudiants] = useState([]);

 
  function ajouterEtudiant() {

  
    const nouvelEtudiant = {
      id: Date.now(),
      nom: nom,
      prenom: prenom,
      age: age
    };

    
    setEtudiants([...etudiants, nouvelEtudiant]);


    setNom("");
    setPrenom("");
    setAge("");
  }

  return (
    <div>
      <h2>Gestion des étudiants</h2>

      {/* Formulaire */}
      <form>

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

        <button
          type="button"
          onClick={ajouterEtudiant}
        >
          Ajouter
        </button>

      </form>

      {/* Liste des étudiants */}
      <h2>Liste des étudiants</h2>

      {etudiants.map((etudiant) => (
        <div key={etudiant.id}>
          <p>
            {etudiant.nom} {etudiant.prenom} — {etudiant.age} ans
          </p>
        </div>
      ))}

    </div>
  );
}

export default GestionEtudiants;
