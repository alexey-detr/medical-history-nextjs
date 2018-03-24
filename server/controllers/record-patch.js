const crypto = require('crypto');

function generateKey() {
  return crypto.randomBytes(10).toString('base64');
}

module.exports = async (ctx) => {
  const {
    key,
    code,
    question,
    answer = '',
  } = ctx.request.body;

  if (!code || !question) {
    ctx.throw(400, 'You have to specify code and question.');
  }

  const answerObject = {
    question,
    answer,
  };

  const collection = ctx.db.collection('record');
  let record = await collection.findOne({ key });

  if (!record) {
    // create a new record
    record = {
      key: generateKey(),
      questionnaire: {
        [code]: answerObject,
      },
    };
    collection.insertOne(record);
  } else {
    // update an existing record by key
    record.questionnaire[code] = answerObject;
    collection.updateOne({ key }, {
      $set: {
        [`questionnaire.${code}`]: answerObject,
      },
    });
  }

  ctx.response.body = {
    record,
  };
};
