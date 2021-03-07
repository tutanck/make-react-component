module.exports = (name) =>
  `import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({}));

const ${name} = ({}) => {
  const classes = useStyles();

  return (
    <></>
  );
};

${name}.propTypes = {};

export default ${name};  
`;
