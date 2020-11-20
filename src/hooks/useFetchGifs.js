import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {     //Hook personaalizado

    const [state, setstate] = useState({
        
        data:[],            //Estado inicial del hook
        loading: true
    
    });

    useEffect( ()=> {
        getGifs(category)                   //Al ser una promesa cuando se resuelve actualizamos
            .then(imgs => {                 //el estado de data con todas las imagenes que contiene gifs
                setstate({                   
                data: imgs,
                loading: false
            });
    })

    },[category]);                          //Al poner el segundo argumento [] solo se llamará getGifs                                     
                                            //si alguno de los elementos de la lista cambia

    return state; //data[], loading:true



}