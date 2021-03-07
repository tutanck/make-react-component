const commandLineArgs = require("command-line-args");
const Component = require("./templates/Component");
const { touch } = require("./lib");
const Hydrator = require("./templates/Hydrator");

const optionDefinitions = [
  {
    type: String,
    name: "name",
    alias: "n",
    multiple: false,
    defaultOption: true,
  },
  { name: "hydrated", alias: "h", type: Boolean },
  { name: "dir", alias: "d", type: String, multiple: false },
  { name: "verbose", alias: "v", type: Boolean },
];

const options = commandLineArgs(optionDefinitions);

const { name, dir, hydrated, verbose } = options;

if (verbose) {
  console.log("info:", "options=", options);
}

if (hydrated) {
  touch(name, Hydrator, dir, { ext: "hyd", verbose: verbose });
  touch(name, Component, dir, { verbose: verbose });
} else {
  touch(name, Component, dir, { verbose: verbose });
}
