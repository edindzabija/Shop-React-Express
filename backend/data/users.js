import bcrypt, { hashSync } from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@besteleben.com',
    password: bcrypt.hashSync('123456', 10),
    isAdming: true,
  },
  {
    name: 'Jon Snow',
    email: 'jon@besteleben.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Beniz',
    email: 'beniz@besteleben.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
