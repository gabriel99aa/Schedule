import React, { useReducer, useEffect } from "react";
import { ContactosReducer } from "../reducers/ContactosReducer";
import TablaContactos from "./TablaContactos";
import FormularioAdd from "./FormularioAdd";

const third = () => {
  const contactos = localStorage.getItem("contactos");

  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, [], third);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  return (
    <div className="container mt-3">
      <FormularioAdd dispatch={dispatch} />
      <TablaContactos contactos={state} dispatch={dispatch} />
    </div>
  );
};

export default Contactos;
