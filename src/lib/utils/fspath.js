const fs = require("fs");
const path = require("path");
const PathExistsError = require("../errors/PathExistsError");

const getPath = (...paths) => path.join(...paths);

const createDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const createFile = (dirPath, filename, content) => {
  const filePath = path.join(dirPath, filename);

  createDir(dirPath);

  if (fs.existsSync(filePath)) {
    throw new PathExistsError(filePath);
  }

  fs.writeFileSync(filePath, content, "utf8");
};

module.exports = {
  getPath,
  createDir,
  createFile,
};
