const { join, } = require('path');
const { readdirSync, renameSync, } = require('fs');

const folder = /^\w+$/;
const [initialPath, match, replace] = process.argv.slice(2);

const rename = path => {
  const files = readdirSync(path);

  files.forEach(file => {
    if (file.match(match)) {
      const filePath = join(path, file);
      const newFilePath = join(path, file.replace(match, replace));
      renameSync(filePath, newFilePath);
    } else if (file.match(folder)) {
      rename(join(path, file));
    }
  });
};

rename(initialPath);
