const getJSFilename = (name) => `${name}.js`;

const getExtendedJSFilename = (name, ext) => `${name}.${ext}.js`;

module.exports = {
  getJSFilename,
  getExtendedJSFilename,
};
