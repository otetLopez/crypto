
function inputFile(fname, isEncrypted) {
    // this.fileName = fileName;
    var fname = fname;
    var isEncrypted = isEncrypted;

    Object.defineProperties(this, {
        "fname": {
            get: function () {
                return fname;
            },
            set: function (value) {
                fname = value;
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

/*** Sample Debug Files Start ***/
var file1 = new inputFile("dannie", true);
console.log(file1.fname + " is " + (file1.isEncrypted ? "Encrypted." : "Decrypted"));

file1.fname = "axl";
file1.isEncrypted = false;
console.log(file1.fname + " is " + (file1.isEncrypted ? "Encrypted." : "Decrypted"));
/*** Sample Debug Files End ***/


function decryptFile() {}
function encryptFile() {}
