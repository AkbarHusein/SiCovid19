const Entry = require('../models/entry');
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');

const getDiscussions = async (request, response, next) => {
  try {
    const entries = await Entry.find({});
    return entries;
  } catch (exception) {
    next(exception);
  }
};

const publishDiscussion = async (request, response, next) => {
  const body = request.body;
  const token = request.session.accessToken;

  const decodedToken = jwt.verify(token, process.env.SECRETPASSWORD);
  if (!token || !decodedToken.id) {
    return response.status(401).json({
      error: 'token missing or invalid',
    });
  }

  const entry = new Entry({
    title: body.title,
    content: body.content,
    author: request.session.username,
    date: new Date(),
  });

  try {
    const savedEntry = await entry.save();
    response.redirect('/forum');
  } catch (exception) {
    next(exception);
  }
};

const publishReply = (request, response, next) => {
  const body = request.body;

  Entry.findOne({ _id: `${body.id}` }, async (error, discussionId) => {
    if (error) {
      console.log('error dek');
    }

    await Entry.updateOne(
      { _id: `${body.id}` },
      {
        $push: {
          replies: [
            {
              author: request.session.username,
              date: new Date(),
              reply: `${body.reply}`,
            },
          ],
        },
      }
    );
  });

  // const entry = {
  //   title: body.title,
  //   content: body.content,
  //   author: body.author,
  //   votes: body.votes,
  // };
};
module.exports = { getDiscussions, publishDiscussion, publishReply };
