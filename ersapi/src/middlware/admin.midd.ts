export function adminMiddleware(req, res, next) {
    const user=req.session.user
    console.log(user.role)
      if (user.role === 'admin' || user.role === 'finance-manager'||user.role === 'associate') {
        next();
      } else {
        res.status(401)
        res.json( "The incoming token has expired");
      }
    }