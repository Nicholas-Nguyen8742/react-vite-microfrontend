const fs = require('fs');
const path = require('path');

function copyFolderSync(source, target, replacements) {
  fs.mkdirSync(target, { recursive: true });
  const files = fs.readdirSync(source, { withFileTypes: true });

  files.forEach((file) => {
    const sourcePath = path.join(source, file.name);
    let targetPath = path.join(target, file.name);

    Object.entries(replacements).forEach(([placeholder, value]) => {
      targetPath = targetPath.replace(new RegExp(placeholder, 'g'), value);
    });

    if (file.isDirectory()) {
      copyFolderSync(sourcePath, targetPath, replacements);
    } else {
      let content = fs.readFileSync(sourcePath, 'utf8');
      Object.entries(replacements).forEach(([placeholder, value]) => {
        content = content.replace(new RegExp(placeholder, 'g'), value);
      });

      fs.writeFileSync(targetPath, content);
    }
  });
}

async function main() {
  const [,, moduleName] = process.argv;
  if (!moduleName) {
    console.error('Usage: generate-module <module-name>');
    process.exit(1);
  }

  const templatePath = path.join(__dirname, './template');
  if (!fs.existsSync(templatePath)) {
    console.error(`Template '${templatePath}' does not exist.`);
    process.exit(1);
  }

  const destination = path.resolve(path.join(__dirname, `../../packages/apps/modules/${moduleName}`));
  if (fs.existsSync(destination)) {
    console.error(`Directory '${destination}' already exists.`);
    process.exit(1);
  }

  const replacements = {
    '__modulename__': moduleName,
  };

  return { templatePath, destination, replacements, moduleName };
}

main()
  .then(({ templatePath, destination, replacements, moduleName }) => {
    copyFolderSync(templatePath, destination, replacements);
    console.log(`Module '${moduleName}' has been generated at '${destination}'.`);
  })
  .catch((e) => {
    console.error(e);
  });
