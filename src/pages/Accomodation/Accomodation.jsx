import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Manege from '../../components/Carrousell/Carrousell';

export default function Accomodation() {
  const { id } = useParams();
  const [accomodations, setAccomodations] = useState([]);

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
          <Manege id={id} />
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
