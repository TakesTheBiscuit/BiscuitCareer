require("shelljs/global");

// Challenge: need to leave the brackets for future runs for now
// sed(/(\w+)\s(\w+)/, '$2, $1', 'file.txt');
// string.replaceAll("\\(.*?\\)","");
sed("-i", "{{last_published}}", "NEW DATE", "docs/index.html");

console.log("Updating last updated date");
