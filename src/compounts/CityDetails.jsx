import React, { useEffect, useState } from 'react';
import { Link, useParams, Route, Routes } from 'react-router-dom';
import data from '../data';

const CityDetails = () => {
  const [city, setCity] = useState(null);
  const { ID } = useParams();

  useEffect(() => {
    const cityArray = data.filter((f) => f.id.toString() === ID);
    setCity(cityArray.length > 0 ? cityArray[0] : null);
  }, [ID]);

  if (!city) {
    return <h2>City not found</h2>;
  }

  return (
    <>
      <h1>{city.name}</h1>
      <p>{city.info}</p>
      <Link to={`/city-details/${ID}/review`} className="btn btn-secondary">See Reviews</Link>

      <Routes>
        <Route path="review" element={<Review r={city.reviews} />} />
      </Routes>
    </>
  );
};

const Review = ({ r }) => {
  return (
    <div style={{ backgroundColor: "red", padding: "10px", marginTop: "10px" }}>
      {r ? <p>{r}</p> : <p>No reviews available.</p>}
    </div>
  );
};

export default CityDetails;
