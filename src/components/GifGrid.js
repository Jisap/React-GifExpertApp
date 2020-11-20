import React, { useState,useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';//Importamos getGifs
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {  // Recibimos la prop desde GifExpertApp

    const {data, loading} = useFetchGifs(category); // Nos traemos el custom hook desestructurando su contenido
                                                    // y le enviamos la category 
  
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>

        { loading && <p className="animate__animated animate__flash">Loading</p> }

        <div className="card-grid">
            
                    {                       
                        data.map( img => (          //Mapeamos data y obtenemos los gifs independientes(img)
                            <GifGridItem            //Se envián al componente gifGridItem
                                key={ img.id }
                                { ...img }
                            />    
                        ))
                    }
            
        </div>
        </>
    )
}
