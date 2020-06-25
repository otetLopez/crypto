import { File } from "./file.js";
import { encryptFile } from './encrypt.js';



/*** Sample Debug Files Start ***/
var file1 = new File("dannie", "password", true);
console.log("INFO_DEBUG: " + file1.fname + " with pass " + file1.pwd + " is " + (file1.isEncrypted ? "Encrypted." : "Decrypted"));

file1.fname = "axl";
file1.isEncrypted = false;
console.log("INFO_DEBUG: " + file1.fname + " with pass " + file1.pwd + " is " + (file1.isEncrypted ? "Encrypted." : "Decrypted"));
/*** Sample Debug Files End ***/


/*** This is the main functionality and shall be triggered by events from the site */

encryptFile(file1);


