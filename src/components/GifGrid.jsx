import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {


  const { images, isLoading } = useFetchGifs(category);

  console.log(isLoading);


  return (
    <>
        <h3>{category}</h3>


        {/* Probar haciendo un componente funcional para que me haga esta misma logica */}
        {
          isLoading && ( <h2>Cargando...</h2> )
        }

        <div className='card-grid'>
          { images.map( img => (
            <GifItem 
              key = { img.id }
              { ...img }
              />
          ) 

          ) }
        </div>
        
    </>
  )
}
