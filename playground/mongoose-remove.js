const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove().then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5986d6801337c6c575c0f11c'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5986d6801337c6c575c0f11c').then((todo) => {
  console.log(todo);
});
