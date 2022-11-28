import React, { useEffect, useState } from 'react'
import { getGif } from '../Helpers/GetGifs';


export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);


  const getImages = async(category) =>{
    const image = await getGif(category);
    setImages( image );
    setIsLoading(false);
  }; 

  useEffect( () => {
     getImages( category ); 
    }, [] );


  return{
    images: images,
    isLoading: isLoading
  }
};
