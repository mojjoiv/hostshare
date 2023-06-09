import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { PlaceContext } from '../providers/PlaceProvider';
import { Link } from 'react-router-dom';
import Image from '../components/Image';
import Spinner from '../components/Spinner';

const IndexPage = () => {
  const { places, loading } = useContext(PlaceContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="flex-column">
      {places.length > 0 &&
        places.map((place) => (
          <Link to={`/place/${place._id}`} key={place._id}>
            <div className="bg-gray-500 mb-2 rounded-2xl flex">
              {place.photos?.[0] && <Image src={place.photos?.[0]} />}
            </div>
            <h2 className="font-bold">{place.address}</h2>
            <h3 className="text-sm text-gray-500 ">{place.title}</h3>
            <div className="mt-1">
              <span className="font-semibold">Kshs {place.price} </span>
              per night
            </div>
            
          </Link>
          
        ))}
    </div>
  );
};

export default IndexPage;
