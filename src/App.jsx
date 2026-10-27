import Accordion from './components/Accordion';
import Tabs from './components/Tabs';
import Dropdown from './components/Dropdown';

function App() {
  const perguntas = [
    {
      titulo: 'O que é uma convenção coletiva?',
      resposta: 'É um acordo entre o sindicato dos trabalhadores e o sindicato patronal que define condições de trabalho para a categoria.'
    },
    {
      titulo: 'Como funciona a homologação da rescisão?',
      resposta: 'É a conferência dos documentos e valores da rescisão. Consulte o sindicato para saber as regras aplicáveis e os documentos necessários.'
    },
    {
      titulo: 'Como buscar orientação jurídica?',
      resposta: 'Entre em contato com os canais oficiais do sindicato para verificar como funciona o atendimento e quais documentos levar.'
    },
    {
      titulo: 'Onde posso consultar meus direitos?',
      resposta: 'Você pode consultar a CLT e a convenção coletiva da sua categoria. Em caso de dúvida, procure orientação do sindicato.'
    }
  ];

  return (
    <main className="pagina">
      <h1>Portal do Sindicato</h1>
      <p>SINDADOS-BA</p>
      <h2>Dúvidas trabalhistas</h2>
      <Accordion perguntas={perguntas} />
      <Tabs />
      <Dropdown />
      <p className="aviso">Atividade acadêmica com informações de exemplo.</p>
    </main>
  );
}

export default App;
