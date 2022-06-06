import express from 'express';
import { getTopic, addTopic, updateTopic, getTopicById, deleteTopic} from '../controllers/forumController.js';

const forumRouter = express.Router();

forumRouter.get('/show',  getTopic);

forumRouter.get('/:id', getTopicById);

forumRouter.post('/posting',  addTopic);

forumRouter.put('/:id', updateTopic);

forumRouter.delete('/:id', deleteTopic);



export default forumRouter;