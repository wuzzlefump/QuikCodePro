const router = require('express').Router();
const { User } = require('../../models');
let Followers = require('../../models/followers');
const codeController = require('../../controllers/codeController');

router.route('/').get(codeController.findAll);

router.route('/follow').post((req, res) => {
    const contentCreatorId = req.body.userId;
    const ContentCreatorName = req.body.username;
    
    const newFollower = new  Followers({
        contentCreatorId,
        ContentCreatorName,
        FollowerId,
        Follower,
    });

    newFollower.save()
    .then(() => res.json(`You are not following ${req.body.username}`))
    .catch(err => res.status(400).json("Error: " + err));
});

