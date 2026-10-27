import { useState } from 'react';

function Accordion({ perguntas }) {
  const [aberto, setAberto] = useState(null);

  function alternar(indice) {
    if (aberto === indice) {
      setAberto(null);
    } else {
      setAberto(indice);
    }
  }

  return (
    <div className="acordeao">
      {perguntas.map((pergunta, indice) => (
        <div className="item" key={pergunta.titulo}>
          <h3>
            <button
              onClick={() => alternar(indice)}
              aria-expanded={aberto === indice}
              aria-controls={`resposta-${indice}`}
            >
              <span>{pergunta.titulo}</span>
              <span aria-hidden="true">{aberto === indice ? '−' : '+'}</span>
            </button>
          </h3>
          <p id={`resposta-${indice}`} className="resposta" hidden={aberto !== indice}>
            {pergunta.resposta}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
