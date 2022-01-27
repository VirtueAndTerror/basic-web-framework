import { User } from './models/User';

const user = User.buildUser({id: 1 });

user.on('save', () => {
  console.log('User has changed, we probably need to update some HTML');
  console.log(user);
});

user.save();
