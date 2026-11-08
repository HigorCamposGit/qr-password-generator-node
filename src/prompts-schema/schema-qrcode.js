import chalk from "chalk";

const promptQRCode = [
  {
    name: "link", // Nome da propriedade que o handle vai ler (result.link)
    description: chalk.yellow("Digite o link ou texto para gerar o QR Code"),
    required: true,
  },
];

export default promptQRCode;