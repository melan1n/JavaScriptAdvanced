function validateRequest(request) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^([\*]|[\w\.]+)$/;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messagePattern = /^[^<>\\&'"]*$/;

    if (!request.hasOwnProperty('method') || !validMethods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    } if (!request.hasOwnProperty('uri') || !uriPattern.test(request.uri)){
        throw new Error('Invalid request header: Invalid URI');
    } if (!request.hasOwnProperty('version') || !validVersions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    } if (!request.hasOwnProperty('message') || !messagePattern.test(request.message)){
        throw new Error('Invalid request header: Invalid Message');
    } else {
        return request;
    }
}

validateRequest({
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
  });
  
  
  