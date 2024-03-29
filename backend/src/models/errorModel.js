export class HttpError extends Error {
  constructor(statuscode, message) {
    super(message);
    this.code = statuscode;
  }
}
