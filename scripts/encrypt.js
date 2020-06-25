
import { File }  from './file.js';

// File Constants
const SUCCESS = 0;
const ERROR = -1;
const INFO_LOG = "INFO_DEBUG";

export function encryptFile(file) {
    if(!file.isEncrypted) {
        console.log(INFO_LOG + "Starting Encryption on file " + file.content + " with pwd " + file.pwd);
        var textToEncrypt = file.content;
        var password = file.pwd;
        var encyrpted = password + "xyzcryptoxyz"; //So we can decode password
        var i;
        for(i=0; i<textToEncrypt.length; i++) {
            encyrpted += password + textToEncrypt[i];
        }
        //console.log("INFO_DEBUG: Encrypted Data is " + encyrpted);
        return encyrpted;
    } else {
        console.log(INFO_LOG + " Inputted file is already encyrpted");
        return ERROR;
    }
}