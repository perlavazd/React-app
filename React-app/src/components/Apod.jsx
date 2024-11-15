import { useState, useEffect } from 'react'; //Importa hooks de react. 'useState' se utiliza para declarar el estado de los datos y 'useEffect' se usa para ejecutar código después de que el componente se haya renderizado.
import { CircularProgress } from '@mui/material';  //Importa componente de carga de página.
import './Apod.css'; //Importa el archivo de CSS.

function ApodCard({url, title, explanation}) { // Toma como 'parametros' o props, la url de la imagen, titulo de la imagen y explicación de esta.
  return ( //Nos retorna la información con los datos.
    <div className="apod-card">
      <h2 className="apod-title">Astronomy Picture of the Day: {title}</h2>
      <img className="apod-img" src={url} alt={title} />
      <p className="apod-explanation">{explanation}</p>
    </div>
  );
}

function Apods() { //Esta hace la solicitud a la API.
  const API_KEY = 'jPYembIWD067Iq1ZsmFXQ3hCml6U2re6fTFdz0s0'; //Se declara en una constante la llave personal para poder acceder a los datos.
  const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`; //Se declara en una constante la API junto con la llave que se proporcionó.
  const [apod, setApod] = useState(null); //Aquí astros sería el estado actual, setAstros es para actualización de estado. Se inicializa apod con valor null  (no hay valor o dato no disponible, esto porque en este punto aun no se ha hecho la llamada a la API).

  useEffect(() => { 
    const fetchData = async () => { //Se utliza para obtener información de la API.
      
        const data = await fetch(API_URL); //Se llama a la API.
        const res = await data.json();
        setApod(res);  // Guardamos la inf en apod
    } 
      
    fetchData().catch ((err) => 
    console.error(err)); //Se hace esto si hay algún error.
        
  }, []);

  return (
    <div className="apod-container">
      {!apod ? ( //Si apod no contiene inf, muestra el componente de carga 'CircularProgress'.
        <CircularProgress />
      ) : ( //Si hay datos entonces muestra pasa la inf a apodCard.
        <ApodCard 
          url={apod.url} //Pasa URL de la imagen al componente ApodCard.
          title={apod.title} //Pasa titulo de la imagen al componente ApodCard.
          explanation={apod.explanation} //Pasa la descripción de la imagen al componente ApodCard.
        />
      )}
    </div>
  );
}

export default Apods; //Exporta el componente Apods, permite que pueda ser importado y utilizado en otras partes de la aplicación.