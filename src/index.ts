import { User } from './models/User';

const user = new User({ id: 9, name: 'new record', age: 0 });

user.on('save', () => {
  console.log('User has changed, we probably need to update some HTML');
  console.log(user);
});

user.save();
