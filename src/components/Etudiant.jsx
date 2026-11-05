function Etudiant(props) {
  return (
    
      <div>
        <h2>Informations de l'étudiant</h2>
      <p>Nom : {props.nom}</p>                     
      <p>Prénom : {props.prenom}</p>
      <p>Âge : {props.age} ans</p>
      <p>Filière : {props.filiere}</p>
      </div>
    
  );
}

export default Etudiant;