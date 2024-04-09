class ApiError extends Error {
  constructor(
    statusCode,
    message = "Error hai bahi kahi pe | Code debug kar",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    (this.message = message), (this.succes = false), (this.errors = errors);

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
