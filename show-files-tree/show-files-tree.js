const fs = require('fs');

exports.showFilesTree = function showFilesTree(dirname, offset = 0) {

    const offsetString = ' '.repeat(offset) + '└' + '─';
    const files = fs.readdirSync(dirname);
    for (const file in files) {
        const element = `${dirname}\\${files[file]}`;
        if (fs.lstatSync(element).isDirectory()) {
            console.log(offsetString, files[file]);
            showFilesTree(element, offset + 1);
        } else {
            console.log(offsetString, files[file]);
        }
    }
}
