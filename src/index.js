// 1> Importamos las librerias React y ReactDOM
import React from "react"; //La libreria que definde que es un componente y como los componentes funcionan juntos.
import ReactDOM from "react-dom/client"; //La libreria que sabe como hacer que un componente aparezca en la pantalla del usuario
// 2> Obtener una referencia al div con id root
const el = document.getElementById("root");
// 3> Le decimos a react que tome el control del elemento
const root = ReactDOM.createRoot(el);

function App(){
 
}

// 5> Mostrar el componente en la pantalla del usuario
root.render(<App/>);