module.exports = (name) =>
  `import React from 'react';
import PropTypes from 'prop-types';
import ${name} from './${name}';

const ${name}Hydrator = ({}) => {

  return (
    <${name} />
  );
};

${name}Hydrator.propTypes = {};

export default ${name}Hydrator;  
`;
