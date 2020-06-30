
import { File }  from './file.js';

// File Constants
const SUCCESS = 0;
const ERROR = -1;
const INFO_LOG = "INFO_DEBUG: ";

/**
 * Functionality: This function decrypts file that are decrypted using cryptorama.
 * @param {*} file  File object generated consisting of text content and password which serves as
 *                  encryption code
 */
export function decryptFile(file) {
    if(file.isEncrypted) {
        console.log(INFO_LOG + "Starting Decryption on file " + file.content + " with pwd " + file.pwd);
        var textToDecrypt = file.content;
        var code = file.pwd;

        // Check if the code inputted is equal to the code used when the file is encrypted
        var idx = checkCode(textToDecrypt, code);
        if(idx < SUCCESS) {
            return ERROR;
        }

        // Remove added header : password + "xyzcryptoxyz"
        var decrypted = textToDecrypt.replace("xyzcryptoxyz", "");
        while(decrypted.search(code) > ERROR) {
            decrypted = decrypted.replace(code, "");
        }
        return decrypted;
    } else {
        console.log(INFO_LOG + " Inputted file is already decrypted");
        return ERROR;
    }
}

/**
 * Functionality: This will check if the encryption code inputted by the user 
 * matches with the encryption code inputted by the user.
 * This will return the index where the encryption header ends, otherwise returns -1 (ERROR)
 * which indicates the inputted file is not encrypted using Cryptorama
 * @param {*} content The contents of the encrypted file 
 * @param {*} code  The password use in the decryption
 */
function checkCode(content, code) {
    // Check if the file is encrypted using Cryptorama
    var crypto_idx = content.search("xyzcryptoxyz");
    if(crypto_idx < SUCCESS) {
        console.log(INFO_LOG + "The file inputted cannot be successfully decrypted as it is not encrypted using Cryptorama");
        alert(INFO_LOG + "The file inputted cannot be successfully decrypted as it is not encrypted using Cryptorama");
        return ERROR;
    }

    // Get the configured code when the file is encrypted
    var configured = content.slice(0, crypto_idx);
    console.log("idx is in " + crypto_idx);
    console.log(INFO_LOG + "Code decoded is " + configured);

    // Compare if inputted code matches the code in the file
    // Codes should be case sensitive
    if(code === configured) {
        // We will return the index where the decryption will start
        // password + "xyzcryptoxyz"
        return (crypto_idx + 11);
    } 
    return ERROR;
}