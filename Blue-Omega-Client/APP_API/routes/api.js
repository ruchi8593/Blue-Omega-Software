const express = require('express');
const router = express.Router();
const ctrlProject = require('../controllers/project');
const ctrlMember = require('../controllers/member');


router
    .route('/members')
    .get(ctrlMember.getMembers);

router
    .route('/projects')
    .get(ctrlProject.getProjects);

module.exports = router;