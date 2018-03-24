module.exports = async (ctx) => {
  const {
    ssn,
    key,
  } = ctx.query;

  if (!ssn && !key) {
    ctx.throw(400, 'You have to specify ssn or key for this request.');
  }
  const collection = ctx.db.collection('record');
  const query = ssn ? { 'questionnaire.STEP_SSN.answer': ssn } : { key };
  const record = await collection.findOne(query);

  if (!record) {
    ctx.throw(404, 'Record not found.');
  }

  ctx.response.body = {
    record,
  };
};
