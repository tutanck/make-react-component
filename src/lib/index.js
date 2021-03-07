const chalk = require("chalk");
const { getPath, createFile } = require("./utils/fspath");
const { getJSFilename, getExtendedJSFilename } = require("./utils/filename");

const touch = async (name, Template, dir, { ext = null, verbose = false }) => {
  if (!name) {
    console.log(chalk.red("error:"), `'${name}' is not a valid name`);
    return;
  }

  if (!Template) {
    console.log(chalk.red("error:"), `'Template' must be provided`);
    return;
  }

  if (dir === null) {
    dir = name.toLowerCase();
  }

  const _dir = dir || ""; // dir === undefined
  const cwd = process.cwd();
  const dirname = getPath(cwd, _dir);

  if (verbose) {
    console.log(chalk.blue("info:"), "cwd=", cwd);
    console.log(chalk.blue("info:"), "dirname=", dirname);
  }

  const filename = ext ? getExtendedJSFilename(name, ext) : getJSFilename(name);

  try {
    createFile(dirname, filename, Template(name));
  } catch (error) {
    console.log(chalk.red("error:"), `${error}`);
    return;
  }
};

module.exports = {
  touch,
};
