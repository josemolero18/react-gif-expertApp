import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

  const [InputValue, setInputValue] = useState("One Punch" )

  const onChangeEvent = (event) =>{ return setInputValue( event.target.value ) };

  const onSubmitFuncion = (event) =>{
      event.preventDefault();
      if( InputValue.trim().length <= 2 ) return;
      setCategories(InputValue);
      setInputValue("");
    }


  return (
    <form onSubmit={ onSubmitFuncion }>
      <input
      type="text"
      placeholder='Escribe una Busqueda'
      value={ InputValue }
      onChange={ onChangeEvent }
    />
    </form>
  )
}
