import { File } from "./file.js";
import { encryptFile } from './encrypt.js';
import { decryptFile } from './decrypt.js';

// Constants
const ERROR = -1;
const SUCCESS = 0;
const ENCRYPT = "ENCRYPT";
const DECRYPT = "DECRYPT";
const INFO_LOG = "INFO_DEBUG: ";

// Element Constants
const BTN_ENCRYPT = "btn_enc";
const BTN_DECRYPT = "btn_dec";
const BTN_DLOAD_ENCRYPTED = "btn_dload_e";
const BTN_DLOAD_DECRYPTED = "btn_dload_d";

// Global Variables
var textFromFileLoaded = "";
var encrypted = "";
var decrypted = "";

// Events triggered by button click
$(document).ready(function () {
    $("button").click(function() { 
        var btn_id = $(this).attr('id');
        console.log(INFO_LOG + "You Pressed " + btn_id);

        switch(btn_id) {
            case BTN_ENCRYPT:
                loadFile(ENCRYPT);
                break;
            case BTN_DECRYPT:
                loadFile(DECRYPT);
                break;
            case BTN_DLOAD_ENCRYPTED:
                createFileForDload(encrypted);
                break;
            case BTN_DLOAD_DECRYPTED:
                createFileForDload(decrypted);
            default:
                // console.log(INFO_LOG + "Button Pressed is not Cryptogize!")
        }
    }); 
}); 

/**
 * Functionality : This function reads the file uploaded by the user.
 * @param {*} process : Needs to be passed to processfile(). 
 *                      Indicates wheter the file uploaded should be encrypted or decrypted
 */
function loadFile(process) {
    textFromFileLoaded= "" ;

    // Check first if user has uploaded a file to prevent error.
    if( document.getElementById("fileToLoad").files.length == 0 ){
        console.log(INFO_LOG + "No files selected.");
        alert("No files selected. Estupido.");
        return;
    }

    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var reader = new FileReader();
    reader.onload = function(progressEvent) {
        textFromFileLoaded = this.result;
        // console.log(INFO_LOG + textFromFileLoaded + "\n ******** End of Text ********");
        // Check if file opened is not empty
        if(textFromFileLoaded.length > 0) {
            var fileToEncrypt = new File(textFromFileLoaded, getUserPassword(), (process === ENCRYPT) ? false : true);
            processFile(fileToEncrypt, process)
        } else {
            alert("Warning: Nothing to "+ process +". File inputted is empty.");
            console.log(INFO_LOG + "Nothing to "+ process +". File inputted is empty.");
        }
    };
    reader.readAsText(fileToLoad);
}

/**
 * Functionality: Does function calls on what process should be executed
 * @param {*} file :  This is the file object to be encrypted.  Refer to file.js for details of a File class
 * @param {*} process : Indicates wheter the file uploaded should be encrypted or decrypted
 */
function processFile(file, process) {
    var output = "";
    switch(process) {
        case ENCRYPT:
            encrypted = "";
            output = encryptFile(file);
            encrypted = output;
            break;
        case DECRYPT:
            decrypted = "";
            output = decryptFile(file);
            decrypted = output;
            break;
        default:
            console.log(INFO_LOG + "Unknown Process");
            alert("Error: Unknown Process");
            return;
    }

    if(output.length > 0) {
        console.log(INFO_LOG + "Data " + process + "ED is -->" + output);
    } else {
        console.log(INFO_LOG + "Processed file empty.");
    }
}

/**
 * Functionality: This will generate text file that will be downloaded by user
 * @param {*} content The content of file to be saved as text
 */
function createFileForDload(content) {
    if(!content.length > 0) {
        // No File To Save
        alert("ERROR: No file to save.  Please upload file to encrypt or decrypt");
        console.log(INFO_LOG + "No file to save.")
    } else {
        window.open("data:application/txt," + encodeURIComponent(content), "_self");
    }
}

/**
 * Functionality: Returns encryption code provided by the user 
 */
function getUserPassword() {
    var code = document.getElementById('pwd').value;
    console.log(INFO_LOG + "This is the secret code >> " + code);
    return (code.length > 0) ? code : "cryptogize!";
}

