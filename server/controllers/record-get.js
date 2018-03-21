module.exports = ctx => {
  ctx.response.body = {ssn: ctx.query.ssn};
};
