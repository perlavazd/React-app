import { useEffect, useState } from 'react'; //Importa hooks de react. 'useState' se utiliza para declarar el estado de los datos y 'useEffect' se usa para ejecutar código después de que el componente se haya renderizado.
import { CircularProgress } from '@mui/material'; //Importa componente de carga de página.
import './Astros.css'; //Importa el archivo de CSS.


function AstroCard ({name, craft}) { //Toma name y craft como parámetros o props.
    return(  //Nos retorna la card con los datos.
        <div className="astro-card">
            <p className="astro-name">{name}</p>
            <p className="astro-craft">{craft}</p>
        </div>

    );
}

function Astros() {
    const API_URL = 'http://api.open-notify.org/astros.json'; //Se declara en una constante la URL de la API.
    const [astros, setAstros] =useState(null); //Aquí astros sería el estado actual, setAstros es para actualización de estado, null (no hay valor o dato no disponible, esto porque en este punto aun no se ha hecho la llamada a la API), sería el valor inicial.

    useEffect(() => { 
        const fetchData = async () => {//Se utiliza para obtener información de la API.
            const data =await fetch(API_URL); //Se llama a la API
            const res = await data.json(); //La respuesta de la API se convierte a formato JSON.
            setAstros(res.people); //Guarda la inf en astros.

        }

        fetchData().catch((err) => console.error(err)); //Se hace esto si hay algún error.

    }, []);

    return (
        <>
        <div className='astros-title'>
            <h2>Name and craft</h2>
        </div>
        <div className='astros-container'>
            {!astros ? (  //Si astros no contiene inf, muestra el componente de carga 'CircularProgress'.
                <CircularProgress/>
            ) : ( //Si hay datos entonces recorre el array astros y pasa los datos como props para AstroCard.
                astros.map((astro, idx) => (
                   <AstroCard key={idx} {...astro} />) //idx es el índice del array el número de posición de cada astronauta en la lista. El operador spread, es para desestructurar las propiedades de un objeto para pasarlas como props al componente AstroCard, sin este operador sería 'name={astro.name} craft={astro.craft}'.
                ))}
        </div>
        </>
    );
}

export default Astros; //Exporta el componente Astros, permite que pueda ser importado y utilizado en otras partes de la aplicación.