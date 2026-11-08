import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/schema-qrcode.js";
import handle from "./handle.js";

export default async function createQrCode() {
    prompt.get(promptSchemaQRCode, handle);
    
    prompt.start();
}