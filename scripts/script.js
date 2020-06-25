import { File } from "./file.js";
import { encryptFile } from './encrypt.js';


// Constants
const ERROR = -1;
const SUCCESS = 0;

// /*** Sample Debug Files Start ***/
// var file1 = new File("dannie", "password", true);
// console.log("INFO_DEBUG: " + file1.fname + " with pass " + file1.pwd + " is " + (file1.isEncrypted ? "Encrypted." : "Decrypted"));

// file1.fname = "axl";
// file1.isEncrypted = false;
// console.log("INFO_DEBUG: " + file1.fname + " with pass " + file1.pwd + " is " + (file1.isEncrypted ? "Encrypted." : "Decrypted"));
// /*** Sample Debug Files End ***/

console.log("INFO_DEBUG: Starting main javascript");

/*** This is the main functionality and shall be triggered by events from the site */
var textFromFileLoaded = "";
var custom_pwd = "";

$(document).ready(function () {
    $("button").click(function() { 
        var btn_id = $(this).attr('id');
        console.log("INFO_DEBUG: You Pressed " + btn_id);
        if(btn_id === "btn_load") {
            textFromFileLoaded= "" ;
            var fileToLoad = document.getElementById("fileToLoad").files[0];
            var reader = new FileReader();
            reader.onload = function(progressEvent) {
                var lines = this.result.split('\n');
                for(var line = 0; line < lines.length; line++) {
                    textFromFileLoaded += lines[line];
                }
                console.log("INFO_DEBUG: " + textFromFileLoaded);
                // Check if file opened is not empty
                if(textFromFileLoaded.length > 0) {
                    console.log("INFO_DEBUG: Not Empty");
                    var fileToEncrypt = new File(textFromFileLoaded, getUserPassword(), false);
                    processFile(fileToEncrypt)
                }
            };
            reader.readAsText(fileToLoad);
        }
    }); 
}); 

function processFile(fileToEncrypt) {
    // Should be implementing a PROMISE here
    if(encryptFile(fileToEncrypt) === ERROR) {
        console.error("ENCRYPTION ERROR");
    } 
}

function getUserPassword() {
    //Should retrieve password inputted by user
    // Temporarily returning defaults
    return "default";
}

