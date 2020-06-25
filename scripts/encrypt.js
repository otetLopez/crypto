
import { File }  from './file.js';

// File Constants
const SUCCESS = true;
const ERROR = -1;

export function encryptFile(file) {
    if(!file.isEncrypted) {
        console.log("INFO_DEBUG: Starting Encryption on file " + file.content + " with pwd " + file.pwd);
        var textToEncrypt = file.content;
        var password = file.pwd;
        var encyrpted = "";
        var i;
        for(i=0; i<textToEncrypt.length; i++) {
            encyrpted += password + textToEncrypt[i];
        }
        console.log("INFO_DEBUG: Encrypted Data is " + encyrpted);
        return SUCCESS;
    } else {
        console.log("INFO_DEBUG: Inputted file is already encyrpted");
        return ERROR;
    }
}