import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  restar(e) {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}
// Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  //Arrow Functions
  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

export class MasSobreEventos extends Component {
	handleClick = (e, msj) =>{
		console.log(e);
		console.log(e.nativeEvent);
		console.log(e.target);
		console.log(msj);
	}
  render() {
    return (
      <div>
        <h2>Más Sobre Eventos</h2>
				<button onClick={(e) => this.handleClick(e, 'Hola, pasando parámetro desde un evento')}>Saludar</button>
      </div>
    );
  }
}
