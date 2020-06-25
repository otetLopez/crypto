/**
 * Inputfile object is created whenever there is a fie being uploaded by the user
 * @param {string} fname 
 * @param {string} password
 * @param {boolean} isEncrypted 
 */
export function File(fname, password, isEncrypted) {
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