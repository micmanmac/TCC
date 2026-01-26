# HIV de A a Z: O Jogo 🎗️

**HIV de A a Z: O Jogo** é uma aplicação web educativa interativa desenvolvida para ensinar sobre prevenção, diagnóstico, aconselhamento e tratamento do HIV/AIDS, além de desmistificar mitos comuns.

O projeto utiliza uma abordagem de gamificação no estilo jogo de tabuleiro para tornar o aprendizado mais engajador e acessível.

## 📋 Sobre o Projeto

Este jogo foi desenvolvido como parte de um Trabalho de Conclusão de Curso (TCC) / Projeto Educativo, visando disseminar conhecimento confiável sobre o HIV de forma lúdica.

**Desenvolvido por:** Prof. Dr. Michel Mansur Machado  
**Contato:** michelmachado@unipampa.edu.br

## 🚀 Funcionalidades

- **Tabuleiro Interativo:** O jogo simula um tabuleiro onde os jogadores avançam casas baseados na sorte (dados) e conhecimento.
- **Quiz Educativo:** Perguntas desafiadoras sobre diferentes categorias:
  - Prevenção
  - Diagnóstico
  - Aconselhamento
  - Tratamento
  - Mitos e Curiosidades
- **Sistema de Ranking:** Acompanhe o desempenho dos jogadores com base no tempo de conclusão e número de acertos/erros.
- **Design Responsivo:** Interface moderna e amigável desenvolvida com Tailwind CSS.
- **Feedback Sonoro:** Efeitos sonoros para acertos, erros, vitória e rolagem de dados.
- **Pesquisa de Satisfação:** Integração com Google Forms para feedback dos usuários.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web modernas:

- **Frontend:**
  - [React](https://react.dev/) (v19)
  - [Vite](https://vitejs.dev/) (Build tool)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Bibliotecas Principais:**
  - `use-sound`: Para efeitos sonoros.
  - `lucide-react` / Icons (se houver uso de ícones externos).

## 📦 Como Executar

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos
- Node.js instalado (versão 18+ recomendada)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/tcc-hiv-game.git
   cd tcc-hiv-game
   ```

2. Acesse a pasta do frontend:
   ```bash
   cd frontend
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. O jogo estará disponível em https://hivdeaazojogo.netlify.app.

## 📂 Estrutura do Projeto

```
TCC_HIV_Game/
├── frontend/             # Código fonte da aplicação React
│   ├── src/
│   │   ├── components/   # Componentes React (Tabuleiro, Modais, etc.)
│   │   ├── assets/       # Imagens e Sons
│   │   ├── data/         # Dados das perguntas e coordenadas
│   │   ├── hooks/        # Custom Hooks (Audio, Game Logic)
│   │   ├── types/        # Definições de Tipos TypeScript
│   │   └── App.tsx       # Componente Principal
│   └── package.json
├── backend/              # Scripts auxiliares (Python)
└── README.md             # Documentação do Projeto
```

## 📄 Licença

Este projeto é destinado a fins educativos. Todos os direitos reservados ao autor.

---
*Agradecemos por jogar e aprender!*
