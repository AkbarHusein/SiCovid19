const router = require('express').Router();
const Entry = require('../models/entry');
const {
  getDiscussions,
  publishDiscussion,
  publishReply,
} = require('../controller/controller-entries');
const jwt = require('jsonwebtoken');

router.get('/', getDiscussions);
router.post('/', publishDiscussion);
router.post('/reply', publishReply);

// router.delete('/:id', async (request, response, next) => {
//   try {
//     await Entry.findByIdAndRemove(request.params.id);
//     response.status(204).end();
//   } catch (exception) {
//     next(exception);
//   }
// });

// router.put('/:id', async (request, response, next) => {
//   const body = request.body;
//   const entry = {
//     title: body.title,
//     content: body.content,
//     author: body.author,
//     votes: body.votes,
//   };

//   try {
//     await Entry.findByIdAndUpdate(request.params.id, entry, { new: true });
//     response.status(204).end();
//   } catch (exception) {
//     next(exception);
//   }
// });

module.exports = router;
