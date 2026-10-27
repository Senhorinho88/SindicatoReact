import { useState } from 'react';
import './Tabs.css';

const beneficios = [
  {
    titulo: 'Saúde e Farmácia',
    conteudo: 'Exemplos de benefícios: consultas, exames e descontos em farmácias parceiras.'
  },
  {
    titulo: 'Educação e Cursos',
    conteudo: 'Exemplos de benefícios: cursos de idiomas e de formação profissional.'
  },
  {
    titulo: 'Lazer e Férias',
    conteudo: 'Exemplos de benefícios: atividades de lazer e colônia de férias.'
  }
];

function Tabs({ abas = beneficios }) {
  const [abaAtiva, setAbaAtiva] = useState(0);

  return (
    <section className="tabs">
      <h2>Convênios e benefícios</h2>
      <div className="tabs-botoes" role="group" aria-label="Categorias de benefícios">
        {abas.map((aba, indice) => (
          <button
            key={aba.titulo}
            className={abaAtiva === indice ? 'tabs-ativa' : ''}
            aria-pressed={abaAtiva === indice}
            onClick={() => setAbaAtiva(indice)}
          >
            {aba.titulo}
          </button>
        ))}
      </div>
      <p className="tabs-conteudo" aria-live="polite">
        {abas[abaAtiva].conteudo}
      </p>
    </section>
  );
}

export default Tabs;
