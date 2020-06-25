/**
 * File Class referes to the file being uploaded by the user for enycryption/decryption
 * @param {string} fname 
 * @param {string} password
 * @param {boolean} isEncrypted 
 */
export function File(file, password, isEncrypted) {
    var content = file;
    var pwd = password;
    var isEncrypted = isEncrypted;

    Object.defineProperties(this, {
        "content": {
            get: function () {
                return content;
            },
            set: function (value) {
                content = value;
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