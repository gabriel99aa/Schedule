import React from "react";
import TablaContactos from "./TablaContactos";

const Contactos = () => {
  const contactos = [
    {
      id: "asbc",
      nombre: "gabriel",
      numero: "2384791235",
    },
    {
      id: "asbcsdfa",
      nombre: "esteban",
      numero: "94567891235",
    },
  ];
  return (
    <div className="container mt-3">
      <TablaContactos contactos={contactos} />
    </div>
  );
};

export default Contactos;
