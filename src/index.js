import prompt from 'prompt';
import chalk from 'chalk';
import promptSchemaMain from "./prompts-schema/schema-main.js";

import createPassword from './services/password/create.js';
import createQrCode from './services/qr-code/create.js';

async function main() {
    // Configura o visual padrão do prompt (opcional para limpar o prefixo 'prompt: ')
    prompt.message = chalk.cyan("⚙️");
    prompt.delimiter = chalk.cyan(": ");

    // Inicia o prompt antes de capturar as entradas
    prompt.start();

    prompt.get(promptSchemaMain, async (err, choose) => {
        if (err) {
            console.log(chalk.red.bold("\n❌ Erro ao processar a entrada. Tente novamente."));
            return;
        }

        // Garante que o usuário digitou uma escolha válida
        if (!choose || !choose.select) {
            console.log(chalk.yellow("⚠️ Nenhuma opção selecionada."));
            return;
        }

        if (choose.select === "1" || choose.select === 1) {
            await createQrCode();
        } else if (choose.select === "2" || choose.select === 2) {
            await createPassword();
        } else {
            console.log(chalk.red("❌ Opção inválida! Escolha 1 ou 2."));
        }
    });
}

main();