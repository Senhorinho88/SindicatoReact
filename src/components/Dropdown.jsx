import { useEffect, useRef, useState } from 'react';
import './Dropdown.css';

const exemplos = [
  {
    titulo: 'Convenções Coletivas 2026',
    conteudo: 'Consulte a convenção da sua categoria para conhecer as condições de trabalho.'
  },
  {
    titulo: 'Editais de Assembleia',
    conteudo: 'Confira nos editais oficiais a data, o local e a pauta das assembleias.'
  },
  {
    titulo: 'Boletins Informativos',
    conteudo: 'Acompanhe as informações e as novidades da categoria nos boletins.'
  }
];

function Dropdown({ documentos = exemplos }) {
  const [aberto, setAberto] = useState(false);
  const [selecionado, setSelecionado] = useState(null);
  const menu = useRef(null);

  useEffect(() => {
    function fecharFora(evento) {
      if (menu.current && !menu.current.contains(evento.target)) {
        setAberto(false);
      }
    }

    document.addEventListener('click', fecharFora);
    return () => document.removeEventListener('click', fecharFora);
  }, []);

  function escolher(documento) {
    setSelecionado(documento);
    setAberto(false);
  }

  return (
    <section className="dropdown">
      <h2>Acesso rápido a documentos</h2>
      <div ref={menu}>
        <button onClick={() => setAberto(!aberto)} aria-expanded={aberto}>
          {selecionado ? selecionado.titulo : 'Selecionar documento'}
        </button>
        {aberto && (
          <ul>
            {documentos.map((documento) => (
              <li key={documento.titulo}>
                <button onClick={() => escolher(documento)}>
                  {documento.titulo}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p aria-live="polite">
        {selecionado ? selecionado.conteudo : 'Escolha uma opção para ver as informações.'}
      </p>
      <p>Documentos de exemplo para a atividade.</p>
    </section>
  );
}

export default Dropdown;
