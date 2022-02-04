const path = `C:\\Temp\\Markdown\\Gateway\\Markdown.Capability.Test.NoColumn.md`;
const ret = extractPath(path);
console.log(ret);

function extractPath(path) {
    let reg = /\\markdown\\/i;
    const ret = reg.exec(path);
    const newPath = path.substr(ret.index);
    const result = newPath.replace(/\\/ig,"/");
    return result;
}