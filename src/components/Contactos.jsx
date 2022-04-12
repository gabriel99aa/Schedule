import React, { useReducer } from "react";
import { ContactosReducer } from "../reducers/ContactosReducer";
import TablaContactos from "./TablaContactos";
import FormularioAdd from "./FormularioAdd";

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
  {
    id: "asdgdfhw5yfa",
    nombre: "agudelo",
    numero: "945691235",
  },
];

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, contactos);

  return (
    <div className="container mt-3">
      <FormularioAdd />
      <TablaContactos contactos={state} />
    </div>
  );
};

export default Contactos;
