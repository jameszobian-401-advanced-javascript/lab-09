'use strict';

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  let error = { error: err };
  res.status(500).json(error).end();
};
