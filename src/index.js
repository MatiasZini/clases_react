// 1> Importamos las librerias React y ReactDOM
import React from "react"; //La libreria que definde que es un componente y como los componentes funcionan juntos.
import ReactDOM from "react-dom/client"; //La libreria que sabe como hacer que un componente aparezca en la pantalla del usuario
import App from "./App";
// 2> Obtener una referencia al div con id root
const el = document.getElementById("root");
// 3> Le decimos a react que tome el control del elemento
const root = ReactDOM.createRoot(el);

/* function App(){ // Componente principal
    let nombre = "Pepe";
    let apellido = "Lopez";
    let edad = 30;

    <div>
        <h1>Bienvenido/a usuario: {nombre} {apellido}</h1>
        <p className="parrafos_rojos">Edad: {edad}</p>
        <label>Ingrese su dni</label>
        <input type="number" min={5} max={20} style={{color:"red", fontsize:"40"}}/>
        <textarea autoFocus={true}/>
    </div>
} */


// 5> Mostrar el componente en la pantalla del usuario
root.render(<App/>);