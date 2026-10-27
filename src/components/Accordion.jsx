function Accordion({ perguntas }) {
  return (
    <div className="acordeao">
      {perguntas.map((pergunta) => (
        <div className="item" key={pergunta.titulo}>
          <h3>{pergunta.titulo}</h3>
          <p className="resposta">{pergunta.resposta}</p>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
