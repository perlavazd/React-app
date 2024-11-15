import imagen from '../assets/imagen.png';
import './About.css';

function About () {
    return(
        <div className="about-card">
            <h2 className='about-title'>Hola, mi nombre es Perla Vázquez</h2>
            <div className='about-content'>
                <img src={imagen} alt="Imagen de prueba de about" />
                <p className="about-descr">Soy una desarrolladora Java Full-Stack comprometida y empática. Con una formación en Ingeniería Bioquímica, actualmente me enfoco en mi desarrollo profesional en el ámbito del desarrollo de software. A lo largo de mi carrera, he participado en proyectos colaborativos donde he aprendido a trabajar en equipo y adaptarme a diferentes desafíos. Mi compromiso con mi crecimiento profesional me impulsa a estar en constante aprendizaje lo que me permite mantenerme actualizada. Aspiro a desarrollar mis habilidades técnicas en un entorno colaborativo y de aprendizaje continuo.</p>
            </div>
            <p><strong>Te invito a explorar la página: space-app </strong></p>
            <a href="mailto:perlavazd@gmail.com">Correo</a>  
        </div>
    );
}

export default About;