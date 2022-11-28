import React, { useState } from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch",]);

    //PosteriorMente Recibira un parametro
    const onAddCategory = (onNewValue) =>{
        if( categories.includes( onNewValue ) ) return;
        setCategories( [ onNewValue ,...categories ] );
    }
  
    return (
    <>
        <h1>Gif Expert App</h1>
    
        <AddCategory setCategories={ onAddCategory }/>
        
        { categories.map( category => 
            <GifGrid 
            category={ category } 
            key={ category }
            /> 
        ) }
    </>
  )
}
