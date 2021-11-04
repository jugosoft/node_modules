const fs = require('fs');

exports.showFilesTree = function showFilesTree(dirname, offset = 0) {

    const offsetString = ' '.repeat(offset) + '└' + '─';
    const files = fs.readdirSync(dirname);
    for (const file in files) {
        console.log(offsetString, files[file]);
        if (fs.lstatSync(`${dirname}\\${files[file]}`).isDirectory()) {
            showFilesTree(`${dirname}\\${files[file]}`, offset + 1);
        } else {
            console.log(`${dirname}\\${files[file]}`, offset + 1);
        }
    }
}
