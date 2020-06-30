
import { File }  from './file.js';

// File Constants
const SUCCESS = 0;
const ERROR = -1;
const INFO_LOG = "INFO_DEBUG: ";
/**
 * Functionality: This function encrypts file 
 * @param {*} file File object generated consisting of text content and password which serves as
 *                 encryption code
 */
export function encryptFile(file) {

    // Check first if this file is already encrypted by cryptorama
    var isEncrypted = file.content.search("xyzcryptoxyz");

    if(file.isEncrypted || isEncrypted > -1) {
        console.log(INFO_LOG + "Inputted file is already encyrpted");
        alert("Inputted file is already encyrpted");
        return ERROR;
    } else {
        console.log(INFO_LOG + "Starting Encryption on file " + file.content + " with pwd " + file.pwd);
        var textToEncrypt = file.content;
        var password = file.pwd;
        var encyrpted = password + "xyzcryptoxyz"; //So we can decode password
        var i;
        for(i=0; i<textToEncrypt.length; i++) {
            encyrpted += password + textToEncrypt[i];
        }
        return encyrpted;
    }
}