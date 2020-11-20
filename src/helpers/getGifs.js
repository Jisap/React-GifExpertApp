
export const getGifs = async( category ) => {

        try{

            const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=mEJajYAkrA8rijbYc4hR6mEUxKHEg9pc`;
            const resp = await fetch(url);  //Petición al server
            const { data } = await resp.json(); //Desestructuramos data de resp y convertimos a json
            const gifs = data.map(img =>{   //Mapeamos data y de cada imagen sacamos lo siguiente
                return{
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url //?->Si viene toda la información se utilizará
                }
            })
            // console.log(gifs);
            // setimages(gifs);// Guardamos en images la respuesta con los gifs
            
            return gifs;//Esto es una promesa

        }catch(error){

            console.log(error);
        }

        
}