
import { File }  from './file.js';

// File Constants
const SUCCESS = true;
const ERROR = false;

export function encryptFile(file) {
    if(!file.isEncrypted) {
        console.log("INFO_DEBUG: Starting Encryption on file " + file.content + " with pwd " + file.pwd);
        return SUCCESS;
    } else {
        console.log("INFO_DEBUG: Inputted file is already encyrpted");
        return ERROR;
    }
}