module.exports = {
    guest: (req, res, next) => {
      if (req.session.user) {
        return res.redirect('/users/perfil');
      }
      next();
    },
  
    auth: (req, res, next) => {
      if (!req.session.user) {
        return res.redirect('/users/login');
      }
      next();
    }
  };