# Portal do Sindicato

Atividade de React com três componentes simples:

- Acordeão: abre uma resposta por vez usando `useState`.
- Abas: troca entre Saúde e Farmácia, Educação e Cursos, Lazer e Férias.
- Dropdown: seleciona documentos e fecha ao escolher uma opção ou clicar fora.

## Executar

```bash
npm install
npm run dev
```

No Codespaces, abra a porta **5173** na aba **Ports**. O ambiente também está configurado para iniciar o servidor automaticamente.

Os componentes estão em `src/components` e são usados pelo `App.jsx`. Os dados podem ser enviados por props. O CSS usa apenas estilos básicos.

As informações e os documentos são exemplos para a atividade.

Para gerar a versão de produção: `npm run build`.
