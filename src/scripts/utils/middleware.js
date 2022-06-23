const unknownEndpoint = (request, response) => {
  var path = require('path');
  response.status(404).sendFile(path.join(__dirname, '../views/pages', '/unknownEndpoint.html'));
};

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error });
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({
      error: 'invalid token',
    });
  }

  next(error);
};

module.exports = {
  unknownEndpoint,
  errorHandler,
};
