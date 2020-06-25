// import { encryptFile } from './encrypt';

// File Constants
const SUCCESS = true;
const ERROR = false;

/**
 * Inputfile object is created whenever there is a fie being uploaded by the user
 * @param {string} fname 
 * @param {string} password
 * @param {boolean} isEncrypted 
 */
function InputFile(fname, password, isEncrypted) {
    var filename = fname;
    var pwd = password;
    var isEncrypted = isEncrypted;

    Object.defineProperties(this, {
        "fname": {
            get: function () {
                return filename;
            },
            set: function (value) {
                filename = value;
            }
        },
        "pwd": {
            get: function () {
                return pwd;
            },
            set: function (value) {
                pwd = value;
            }
        },
        "isEncrypted": {
            get: function () {
                return isEncrypted;
            },
            set: function (value) {
                isEncrypted = value;
            }
        }
    });
}

function encryptFile(file) {
    if(!file.isEncrypted) {
        console.log("INFO_DEBUG: Starting Encryption on file " + file.fname);
        return SUCCESS;
    } else {
        console.log("INFO_DEBUG: Inputted file is already encyrpted");
        return ERROR;
    }
  
}


/*** Sample Debug Files Start ***/
var file1 = new InputFile("dannie", "password", true);
console.log("INFO_DEBUG: " + file1.fname + " is " + (file1.isEncrypted ? "Encrypted." : "Decrypted"));

file1.fname = "axl";
file1.isEncrypted = false;
console.log("INFO_DEBUG: " + file1.fname + " is " + (file1.isEncrypted ? "Encrypted." : "Decrypted"));
/*** Sample Debug Files End ***/


/*** This is the main functionality and shall be triggered by events from the site */
encryptFile(file1);


