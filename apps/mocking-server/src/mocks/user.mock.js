const responses = {
  valid: {
    default: true,
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      id: 'someId',
      first_name: 'John',
      family_name: 'doe',
    },
  },
  invalidRequest: {
    default: false,
    status: 400,
    data: {
      code: 400,
    },
  },
  internalServerError: {
    default: false,
    status: 501,
  },
};

module.exports = {
  name: 'getUser',
  request: {
    url: '/user',
    method: 'GET',
  },
  responses,
};
