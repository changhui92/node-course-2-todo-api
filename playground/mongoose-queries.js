const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '598490e476229b5706c42b1c';
//
// if (!ObjectId.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var userId = '598496d92da9a11a07b166f8';

User.findById(userId).then((user) => {
  if(!user){
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e)
});
