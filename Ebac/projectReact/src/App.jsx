import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import Repositorio from "./components/Repositorio";

import { useState } from "react";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          {/* <Formulario /> */}
          <Perfil nomeUsuario={nomeUsuario} />
          <Repositorio nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  );
}

export default App;
