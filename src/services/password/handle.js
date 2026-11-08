import permittedCharacters from "./utils/permitted-characters.js";

export default async function handlePassword() {
    let characters = [];
    let password = "";

    // Garantir um tamanho padrão caso a variável de ambiente não esteja definida
    const passwordLength = parseInt(process.env.PASSWORD_LENGTH) || 12;
    characters = await permittedCharacters();

    if (characters.length === 0) {
        throw new Error("❌ Nenhum caractere permitido foi selecionado nas configurações (.env).");
    }

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}