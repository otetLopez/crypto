import { File } from "./file.js";
import { encryptFile } from './encrypt.js';


// Constants
const ERROR = -1;
const SUCCESS = 0;

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
                // var uneditted = this.result;
                // console.log(uneditted);
                // var lines = this.result.split('\n');
                // for(var line = 0; line < lines.length; line++) {
                //     textFromFileLoaded += lines[line];
                // }
                textFromFileLoaded = this.result;
                console.log("INFO_DEBUG: " + textFromFileLoaded + "\n ******** End of Text ********");
                // Check if file opened is not empty
                if(textFromFileLoaded.length > 0) {
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
    // Should retrieve password inputted by user
    // Temporarily returning defaults
    return "default";
}

