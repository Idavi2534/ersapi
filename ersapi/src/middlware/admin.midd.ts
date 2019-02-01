export function adminMiddleware(req, res, next) {
    const user=req.session.user
      if (user.role === 'admin' || user.role === 'finance-manager') {
        next();
      } else {
        res.sendStatus(401);
      }
    }