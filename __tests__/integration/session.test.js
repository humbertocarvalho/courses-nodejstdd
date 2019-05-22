const { User } = require('../../src/app/models');

describe('Authentication', () => {
  it('should sum two numbers', async () => {
    const user = await User.create({
      name: 'Humberto',
      email: 'email@email.com',
      password_hash: 'hashashash'
    });

    console.log(user);

    expect(user.email).toBe('email@email.com');
  });
});
