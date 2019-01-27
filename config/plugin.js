'use strict';

// had enabled by egg
// exports.static = true;

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.neo4j = {
  enable: true,
  package: 'egg-neo4j',
};
