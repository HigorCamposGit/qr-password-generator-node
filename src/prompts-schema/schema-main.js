import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("Selecione a ferramenta:\n(1) Gerar QR Code\n(2) Gerar Senha\n> "),
        pattern: /^[1-2]$/,
        message: chalk.red.bold.italic("❌ Opção inválida! Escolha apenas 1 ou 2."),
        required: true,
    }
];

export default promptSchemaMain;