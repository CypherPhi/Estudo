//rafce
import React from "react";

const App3 = () => {
  return <div></div>;
};

export default App3;

//Arrow Function
const App2 = () => <h1>Ola</h1>;

//Nomeaçao de componente
Utilizar PascalCase ex: Header

//Exportaçao de copmponentes
Sem o default so pode importar com o nome exportado
Com o defautl pode usar qualquer nome

//Envio de informaçao atravez de componentes
Utiliza props exemplo no SingleItem

Preenchimento de Array{items === 5 ? (
  <>
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
  </>
) : (
  <>
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
  </>
)}

Array.Map(() => {}) = traz todas as informaçoes do array e troca pelo que voce quer
Array(5).fill() = preenche o array com alguma informaçao ou undefined
{Array(items)
  .fill()
  .map((index) => (
    <SingleItem key={`${title}-${index}`} />
  ))}

  //Quando componentes se reenderizam
  //uma das ocacioes e quando uma variavel usada precisa ser atualziada
  //Hook useState