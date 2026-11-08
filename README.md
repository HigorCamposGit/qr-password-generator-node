# 🚀 Criando um Gerador de QR Codes e Senhas para E-commerces com Node.js

Um kit de utilidades em linha de comando (CLI) desenvolvido em **Node.js** com uma arquitetura altamente escalável e modular, voltado para automações e suporte a e-commerces, para a **Formação Node.js Fundamentals**.
Agradecimentos especiais ao instrutor **[Felipe Silva Aguiar](https://github.com/felipeAguiarCode)** por todo o conteúdo ensinado, estrutura fornecida e orientação durante a trilha de aprendizado de Node.js!

---

## 🛠️ Tecnologias e Ferramentas

- **Node.js** (com suporte nativo a ES Modules e `--watch`)
- **Chalk** (estilização de cores e logs no terminal)
- **Prompt** (captura interativa de entradas do utilizador)
- **Qrcode-terminal** (Geração de Senhas e exibição de QR Codes diretamente no console, opçã 1 ou 2)
- **Git** (controle de versão e gestão de histórico)
- **VS Code** (ambiente de desenvolvimento integrado)

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
```
---

## 🤝 Conecte-se Comigo

<p align="center">
  <img src="https://github.com/HigorCamposGit.png" width="100px" style="border-radius: 50%;" alt="Foto de Higor de Campos" /><br />
  <b>Projeto atualizado por:</b> <a href="https://github.com/HigorCamposGit">Higor de Campos</a>
</p>

---
