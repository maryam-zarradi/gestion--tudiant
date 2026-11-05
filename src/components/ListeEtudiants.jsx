
const etudiants = [
  {nom: "Alami", prenom: "Ahmed", age: 20, photo: "" },
  {nom: "Benali", prenom: "Sara", age: 21 },
  {nom: "Idrissi", prenom: "Youssef", age: 19 },
  {nom: "Amrani", prenom: "Salma", age: 22 },
  {nom: "Bennani", prenom: "Imane", age: 23 },
  {nom: "Tazi", prenom: "Omar", age: 20 }
];

function ListeEtudiants() {  
  return (
    <div>
      <h2>Liste des étudiants</h2>

      <div>

      {etudiants.filter((e, i) => e.age > 20 ).map((e) => (

          <p key={i}>
            {e.nom} {e.prenom} — {e.age} ans
          </p>
        
      ))}

      </div>
    </div>
  );
}

export default ListeEtudiants;
