import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Accomodation(props) {
  const { id } = useParams();
  const [accomodations, setAccomodations] = useState([]);

  // Utilisez la prop de pictures passée
  const pictures = props.pictures;

  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then(response => response.json())
      .then(data => setAccomodations(data));
  }, []);

  const accomodation = accomodations.find(a => a.id === id);

  return (
    <div>
      <h2>Appartement sélectionné : {id}</h2>
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
          {/* Vérifiez si la prop pictures est définie avant de l'utiliser */}
          {pictures && [...accomodation.pictures, ...pictures].map(picture => (
            <img key={picture} src={picture} alt={accomodation.title} />
          ))}
          {!pictures && accomodation.pictures.map(picture => (
            <img key={picture} src={picture} alt={accomodation.title} />
          ))}
          <img src={accomodation.host.picture} alt={accomodation.host.name} />
        </div>
      )}
    </div>
  );
}

// Ajoutez la validation des props avec PropTypes
Accomodation.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string)
};