/* eslint-disable no-unused-vars */
const router = require('express').Router();
const passport = require('../../config/passport');
const db = require('../../models');
const authMiddleware = require('../../config/middleware/authMiddleware');

router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/api/users/unauthorized',
    failureFlash: true,
  }),
  (req, res, next) => {
    console.log('sign in successful');
    res.json({
      user: req.user,
      loggedIn: true,
    });
  },
);

router.post('/signup', (req, res, next) => {
  db.User.findOne({ username: req.body.username }, (err, user) => {
    if (err) throw err;
    if (user) {
      console.log('user already exists');
      return res.json('user already exists');
    }
    if (!user) {
      db.User.findOne({ email: req.body.email }, (error, useremail) => {
        if (error) throw error;
        if (useremail) {
          return res.json('email is already in use');
        }
        if (!useremail) {
          const newUser = new db.User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            avatar: req.body.avatar,
            bio: req.body.bio
          });
          newUser.password = newUser.generateHash(req.body.password);
          newUser.save((error2) => {
            if (error2) throw error2;
            console.log('user saved!');
            res.redirect(307, '/api/users/login');
          });
        }
      });
    }
  }).catch((error) => {
    console.log('Issue searching db for user ', error);
  });
});

router.get('/', (req, res, next) => {
  db.User.find({}, (err, users) => {
    if (err) throw err;
    res.json(users)
  })
})

router.get('/unauthorized', (req, res, next) => {
  res.json({
    error: req.flash('error'),
    message: 'user not authenticated',
  });
});

router.get('/profile', authMiddleware.isLoggedIn, (req, res, next) => {
  res.json({
    user: req.user,
    loggedIn: true,
  });
});

router.get('/logout', authMiddleware.logoutUser, (req, res, next) => {
  res.json('User logged out successfully');
});

router.get('/admin', authMiddleware.isAdmin, (req, res, next) => {
  res.json({
    user: req.user,
    loggedIn: true,
  });
});

router.put('/profile/update', (req, res,) => {
  let param = req.body
  db.User.findByIdAndUpdate({ _id: param._id }, { $set: { avatar: param.avatar, bio: param.bio } }).then(data => {
    console.log(data)
    res.json(data)
  }).catch(err => {
    res.json(err)
  })
})

router.put('/follow', authMiddleware.isLoggedIn, (req, res) => {
  db.User.findByIdAndUpdate(req.body.following, {
    $push: { followers: req.body.followers }
  }, {
    new: true
  }, (err, result) => {
    if (err) {
      return res.status(422).json({ error: err })
    }
    db.User.findByIdAndUpdate(req.body.followers,{
      $push:{following: req.body.following}
    },{new:true}).then(result=>{
      res.json(result)
    }).catch(err=>{
      return res.status(422).json({error:err})
    })
  }
  )
})

router.put('/unfollow', authMiddleware.isLoggedIn, (req, res) => {
  db.User.findByIdAndUpdate(req.body.following, {
    $pull: { followers: req.body.followers }
  }, {
    new: true
  }, (err, result) => {
    if (err) {
      return res.status(422).json({ error: err })
    }
    db.User.findByIdAndUpdate(req.body.followers,{
      $pull:{following: req.body.following}
    },{new:true}).then(result=>{
      res.json(result)
    }).catch(err=>{
      return res.status(422).json({error:err})
    })
  }
  )
})

module.exports = router;
