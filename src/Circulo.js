import { useState } from "react";
export const Circulo = () => {
  const [seleccionado, setSeleccionado] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("#d3d3d3");
  const cambiarFondo = () => {
    seleccionado ? setSeleccionado(false) : setSeleccionado(true);
    seleccionado
      ? setBackgroundColor("#ffa500")
      : setBackgroundColor("#d3d3d3");
  };
  return (
    <li
      className="circulo"
      style={{ backgroundColor: backgroundColor }}
      onClick={cambiarFondo}
    ></li>
  );
};
