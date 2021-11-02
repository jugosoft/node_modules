exports.showTree = function showTree(tree, offset = 0) {
    let offsetString = ' '.repeat(offset) + '└' + '─';
    for (const node in tree) {
        const element = tree[node];
        console.log(offsetString, element.name);
        if (element.items) {
            showTree(element.items, offset + 1);
        } else {
            showTree(element.items, offset + 1);
        }

    }
}
