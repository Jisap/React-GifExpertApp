import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => { //Recibimos la props setCategories del GifExpertApp

    const [inputValue, setinputValue] = useState('');
    
    const handleInputChange = (e) => {  //Esta función establece el valor del input y lo guarda en el hook inputValue
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);       //Como no podemos traernos el hook categories pero si su setCategories
                                                                //utilizamos esta función donde lo que venga de setCategories será mapeado
                                                                //y a esto le añadimos lo que se ponga en el input
            setinputValue('');
        }                                                       

    }                                                       
                                                            
    return (
        
        <form onSubmit={handleSubmit}>          
            <input
                type="text"
                value={inputValue}              //Valor del input
                onChange={ handleInputChange}   //Se dispara un evento cuando cambia el input
            />
        </form>                  
        
    )
}

AddCategory.prototype = {                       //Donde voy a usar una prop puedo establecer 
    setCategories: PropTypes.func.isRequired    //que sea requerido
}
