module.exports = class PathExistsError extends Error {
  constructor(path) {
    super();
    this.name = "PathExistsError";
    this.message = `${path} already exists`;
  }
};
