import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



// Définition du composant Accomodation
export default function Accomodation() {
  // Récupération de l'ID de l'hébergement depuis les paramètres de l'URL avec useParams
  const { id } = useParams();
  

  // Définition de l'état local accomodations avec useState, initialisé à une liste vide
  const [accomodations, setAccomodations] = useState([]);

  // Utilisation de useEffect pour charger les données depuis le fichier JSON
  useEffect(() => {
    fetch('http://localhost:3000/data.json') // Appel à l'API fetch pour récupérer les données
      .then(response => response.json()) // Conversion de la réponse en JSON
      .then(data => setAccomodations(data)); // Stockage des données dans l'état local avec setAccomodations
  }, []); // Dépendance vide pour exécuter cet effet uniquement au montage du composant

  // Récupération de l'hébergement correspondant à l'ID spécifié avec la méthode find
  const accomodation = accomodations.find(a => a.id === id);

  // Rendu du composant
  return (
    <div>
      <h2>Appartement sélectionné : {id}</h2>
      {/* Affichage des détails de l'hébergement s'il est trouvé */}
      {accomodation && (
        <div>
          <h3>{accomodation.title}</h3>
          <p>{accomodation.description}</p>
          <p>Emplacement : {accomodation.location}</p>
          <p>Équipements : {accomodation.equipments.join(', ')}</p>
          <p>Tags : {accomodation.tags.join(', ')}</p>
          <p>Note : {accomodation.rating}</p>
          <p>Hôte : {accomodation.host.name}</p>
          <img src={accomodation.cover} alt={accomodation.title} />
          {accomodation.pictures.map(picture => (
            <img key={picture} src={picture} alt={accomodation.title} />
          ))}
          <img src={accomodation.host.picture} alt={accomodation.host.name} />
        </div>
      )}
    </div>
  );


}


