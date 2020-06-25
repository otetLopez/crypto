
import { File }  from './file.js';

// File Constants
const SUCCESS = 0;
const ERROR = -1;
const INFO_LOG = "INFO_DEBUG: ";


export function decryptFile(file) {
    if(file.isEncrypted) {
        console.log(INFO_LOG + "Starting Decryption on file " + file.content + " with pwd " + file.pwd);
        //console.log("INFO_DEBUG: Encrypted Data is " + encyrpted);
        return "";
    } else {
        console.log(INFO_LOG + " Inputted file is already decrypted");
        return ERROR;
    }
}