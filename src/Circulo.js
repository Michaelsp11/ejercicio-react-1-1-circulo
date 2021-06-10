import { useState } from "react";
export const Circulo = () => {
  const [seleccionado, setSeleccionado] = useState(false);
  const comprobarSeleccionado = () => {
    if (seleccionado) {
      return "#f00";
    } else {
      return "";
    }
  };
  return (
    <li
      className="circulo"
      style={{ backgroundColor: { comprobarSeleccionado } }}
    ></li>
  );
};
