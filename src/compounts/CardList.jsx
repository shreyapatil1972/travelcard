import React, { useEffect, useState } from 'react';
import CardBootstrap from './CardBootstrap';

const CardList = ({ data }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data || []);
  }, [data]);

  return (
    <div className='container bg-white'>
      <div className="row">
        {cards.length > 0 ? (
          cards.map((elmt, index) => (
            <div key={index} className='col mb-3 hoverEffect'>
              <CardBootstrap city={elmt} />
            </div>
          ))
        ) : (
          <p>No cities available.</p>
        )}
      </div>
    </div>
  );
}

export default CardList;
