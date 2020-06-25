import { File } from "./file.js";
import { encryptFile } from './encrypt.js';


// Constants
const ERROR = -1;
const SUCCESS = 0;
const INFO_LOG = "INFO_DEBUG: ";

console.log(INFO_LOG + "Starting main javascript");

/*** This is the main functionality and shall be triggered by events from the site */

var textFromFileLoaded = "";
var encrypted = "";
var decrypted = "";
var custom_pwd = "";

$(document).ready(function () {
    $("button").click(function() { 
        var btn_id = $(this).attr('id');
        console.log(INFO_LOG + "You Pressed " + btn_id);
        if(btn_id === "btn_enc") {
            textFromFileLoaded= "" ;
            var fileToLoad = document.getElementById("fileToLoad").files[0];
            var reader = new FileReader();
            reader.onload = function(progressEvent) {
                textFromFileLoaded = this.result;
                console.log(INFO_LOG + textFromFileLoaded + "\n ******** End of Text ********");
                // Check if file opened is not empty
                if(textFromFileLoaded.length > 0) {
                    var fileToEncrypt = new File(textFromFileLoaded, getUserPassword(), false);
                    processFile(fileToEncrypt)
                }
            };
            reader.readAsText(fileToLoad);
        }
        else if(btn_id === "btn_dec") {
            
        }
        else if(btn_id === "btn_dload_e") {
            // Download encrypted file
            createFileForDload(encrypted);
        }
        else if(btn_id === "btn_dload_d") {
            // Download decrypted file
            createFileForDload(decrypted);
        }
    }); 
}); 

function processFile(fileToEncrypt) {
    // Should be implementing a PROMISE here
    encrypted = "";
    encrypted = encryptFile(fileToEncrypt);
    if(encrypted === ERROR) {
        console.error("ENCRYPTION ERROR");
        
    }  else {
        console.log(INFO_LOG + "Encrypted Data is " + encrypted);

    }
}

function createFileForDload(content) {
    if(!content.length > 0) {
        // No File To Save
        alert("ERROR: No file to save.  Please upload file to encrypt or decrypt");
        console.log(INFO_LOG + "No file to save.")
    } else {
        window.open("data:application/txt," + encodeURIComponent(content), "_self");
    }
}

function getUserPassword() {
    // Should retrieve password inputted by user
    // Temporarily returning defaults
    var code = document.getElementById('pwd').value;
    console.log(INFO_LOG + "This is the Ecryption Code >> " + code);
    return (code.length > 0) ? code : "default";
}

