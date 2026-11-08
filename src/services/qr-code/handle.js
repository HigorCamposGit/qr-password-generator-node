import chalk from "chalk";
import qr from "qrcode-terminal";

export default async function handle(err, result) {
    if (err) {

        console.log(chalk.red.inverse("Erro ao gerar QR Code"));
        return;
    }
    const isSmall = result.type == 2;
    qr.generate(result.link,{small:isSmall}, (qrcode) => {
        console.log(chalk.green("QR Code gerado com sucesso!\n"));
        console.log(qrcode);
    })
    
}