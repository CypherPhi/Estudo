import { useState, useEffect } from "react";
{
  /* armazernar valor */
}
const Formulario = () => {
  let [materiaA, setMateriaA] = useState(0);
  let [materiaB, setMateriaB] = useState(0);
  let [materiaC, setMateriaC] = useState(0);
  let [nome, setNome] = useState("");

  useEffect(() => {}, [nome]);

  const alteraNome = (evento) => {
    setNome(evento.target.value);
  };

  const calcularMedia = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;
    if (media >= 7) {
      return <p>Voce foi Aprovado</p>;
    } else {
      return <p>Voce foi Reprovado</p>;
    }
  };

  return (
    <>
      <form>
        <ul>
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <input type="text" placeholder="Seu Nome" onChange={alteraNome} />
        <input
          type="number"
          placeholder="Nota Materia A"
          onChange={({ target }) => setMateriaA(parseInt(target.value))}
        />
        <input
          type="number"
          placeholder="Nota Materia B"
          onChange={(evento) => setMateriaB(parseInt(evento.target.value))}
        />
        <input
          type="number"
          placeholder="Nota Materia C"
          onChange={(evento) => setMateriaC(parseInt(evento.target.value))}
        />
        {calcularMedia()}
      </form>
    </>
  );
};

export default Formulario;
