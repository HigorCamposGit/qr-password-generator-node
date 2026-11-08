import chalk from "chalk";
import handlePassword from "./handle.js";

export default async function createPassword() {
    console.log(chalk.magenta.bold("🔐 Gerando senha..."));
    
    const password = await handlePassword();
    
    console.log(chalk.green.bold("✅ Senha gerada com sucesso:"), chalk.cyanBright.bold(password));
}