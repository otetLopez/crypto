
import { File }  from './file.js';

// File Constants
const SUCCESS = true;
const ERROR = false;

export function encryptFile(file) {
    var newFile = new File(file.fname, file.pwd, file.isEncrypted);
    if(!file.isEncrypted) {
        console.log("INFO_DEBUG: Starting Encryption on file " + newFile.fname);
        return SUCCESS;
    } else {
        console.log("INFO_DEBUG: Inputted file is already encyrpted");
        return ERROR;
    }
}