# Portal do Sindicato

Primeira parte da atividade de React: acordeão de dúvidas trabalhistas.

## Executar

```bash
npm install
npm run dev
```

No Codespaces, abra a porta **5173** na aba **Ports**. A configuração do ambiente também inicia o servidor automaticamente.

## Como funciona

- `App.jsx` contém as perguntas e passa os dados por props.
- `components/Accordion.jsx` usa `useState` para guardar qual pergunta está aberta.
- Ao clicar em outra pergunta, a anterior fecha. Clicar na pergunta aberta fecha a resposta.
- `styles.css` contém o CSS da página.

As respostas são exemplos para a atividade. Nesta etapa, o projeto contém somente o acordeão.

Para gerar a versão de produção: `npm run build`.
