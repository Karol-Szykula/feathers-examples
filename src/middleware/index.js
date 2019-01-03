const cookieParser = require('cookie-parser');
const { authenticate } = require('@feathersjs/authentication').express;

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.

  // Render the /login view
  app.get('/login', (req, res) => res.render('login'));

  // Render the protected chat page
  app.get('/chat', cookieParser(), authenticate('jwt'), async (req, res) => {
    // `req.user` is set by `authenticate('jwt')`
    const { user } = req;
    // Since we are rendering on the server we have to pass the authenticated user
    // from `req.user` as `params.user` to our services
    const params = {
      user, query: {}
    };
    // Find the list of users
    const users = await app.service('users').find(params);
    // Find the most recent messages
    const messages = await app.service('messages').find(params);

    res.render('chat', { user, users, messages });
  });

  // For the logout route we remove the JWT from the cookie
  // and redirect back to the login page
  app.get('/logout', cookieParser(), (req, res) => {
    res.clearCookie('feathers-jwt');
    res.redirect('/login');
  });
};