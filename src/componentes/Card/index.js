import React from 'react'; 
import './style.css'; 

export default function Card(){
    return(
        <div className = "card-container">
           <p> Componentes:</p>
           <p> Facilitar em manter partes menores funcionando corretamente</p>
           <p>Você pode reutilizar -los, ou seja, menos código para se escrever</p>
        </div>
    );
}