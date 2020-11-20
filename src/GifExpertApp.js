import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    //const categories = ['OnePunch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['OnePunch']);//Hook categories, definimos un estado para categorias

    // const handleAdd = () => {
    //     setCategories([...categories,'HunterXHunter']);     //Así hay que añadir elementos a un estado
    //                 //(cats => [...cats, 'HunterXHunter])   //Otra forma  
    // }

    return (
        //Enviamos al componente AddCategory la función del hook categories, setCategories
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>

            <ol>
                {
                    categories.map( category => ( 
                            <GifGrid 
                                key={ category }
                                category={ category } 
                            />
                    ))
                }
            </ol>
        </>
    )

    
}
