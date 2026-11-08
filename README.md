# 🚀 CLI Utility Kit: QR Code & Password Generator

Um kit de utilidades em linha de comando (CLI) desenvolvido em **Node.js** com uma arquitetura altamente escalável e modular, voltado para automações e suporte a e-commerces, para a **Formação Node.js Fundamentals**

---

## 🛠️ Tecnologias e Ferramentas

* **Node.js** (com suporte nativo a ES Modules e `--watch`)
* **Chalk** (estilização de cores e logs no terminal)
* **Prompt** (captura interativa de entradas do utilizador)
* **Qrcode-terminal** (geração e exibição de QR Codes diretamente na consola)

---

## 📂 Arquitetura do Projeto

O projeto segue uma estrutura modular limpa, facilitando a adição de novas ferramentas e features futuras:

```text
criando-gerador-de-qr-para-e_commerces-node.js/
├── src/
│   ├── prompts/          # Configurações e esquemas de interação com o utilizador
│   ├── services/         # Lógicas de negócio
│   │   ├── password/     # Módulo gerador de senhas seguras
│   │   └── qr-code/      # Módulo gerador de QR Codes
│   └── index.js          # Ponto de entrada principal da aplicação CLI
├── .env         # Modelo de variáveis de ambiente
├── .gitignore            # Arquivos ignorados pelo controle de versão
├── package.json          # Configurações e dependências do projeto
└── package-lock.json     # Travamento de versões das dependências