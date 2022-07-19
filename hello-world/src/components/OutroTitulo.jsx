import { Component } from "react";

class OutroTitulo extends Component {
  render() {
    const titulo = this.props.titulo ?? "Olá, mundo!";
    return <h1>{titulo}</h1>;
  }
}

export default OutroTitulo;
