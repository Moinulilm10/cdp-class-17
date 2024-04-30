const responseHandler = () => {
  const statusMap = {
    ok: 200,
    created: 201,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    internalError: 500,
  };

  return async (ctx, next) => {
    Object.entries(statusMap).forEach(([method, status]) => {
      ctx.response[method] = (message, data) => {
        ctx.status = status;
        ctx.body = { message, data };
      };
    });

    await next();
  };
};

module.exports = responseHandler;
