/*
    Response codes are always a string, with a `-` seperating the code into two parts
    First digit - response category:
        0: success
        1: internal error
        2: authentication error
        3: upstream API error
        4: client error
    Second digit - specific response type
*/

export default Object.freeze({
  wrongMethod: {
    status: 405,
    code: '4-0',
    human: 'This HTTP method is not allowed on this endpoint.',
  },
  jsonMalformed: {
    status: 400,
    code: '4-1',
    human: 'The JSON provided is malformed.',
  },
  wrongContentType: {
    status: 400,
    code: '4-2',
    human: 'The content type header in the request did not specify JSON.',
  },
  paramsMissing: {
    status: 400,
    code: '4-3',
    human: 'The necessary parameters for this endpoint were not provided.',
  },
  internalError: {
    status: 500,
    code: '1-0',
    human: 'An internal error has occurred. Try again later.',
  },
  noAuth: {
    status: 400,
    code: '2-0',
    human: 'The authorization is missing.',
  },
})