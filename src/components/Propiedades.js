import React from "react";
import PropTypes from "prop-types"

export default function Propiedades(props) {
    return(
        <div>
            <h2>Propiedades</h2>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano ? 'Verdadero':'Falso'}</li>
            <li>{props.arreglo.join('--')}</li>
            <li>{props.objeto.nombre + " -- " + props.objeto.usuario}</li>
            <li>{props.arreglo.map(props.funcion).join('--')}</li>
            <li>{props.elementReact}</li>
            <li>{props.componentReact}</li>
        </ul>
        </div>
    );
}

Propiedades.propTypes={
    numero: PropTypes.number,
}