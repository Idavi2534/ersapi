export function adminMiddleware(req, res, next) {
    const user=req.session.user
      if (user.role === 'admin' || user.role === 'finance-manager') {
        next();
      } else {
        res.status(401)
        res.json( "The incoming token has expired");
      }
    }