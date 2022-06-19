const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: Date,
  replies: [{ id: String, author: String, date: Date, reply: String }],
});

/* db.entries.updateOne({_id:ObjectId('62af07bae7d11b0a78935506')}, { 
  $set: {
    replies:
      [
        { id: 'String1234', author: 'Husein', date: Date, reply: 'ini balasan' }
      ]
    }
  }); */

// entrySchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   },
// });

module.exports = mongoose.model('Entry', entrySchema);
