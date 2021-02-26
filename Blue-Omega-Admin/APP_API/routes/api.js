const express = require('express');
const router = express.Router();
const ctrlProject = require('../controllers/project');
const ctrlMember = require('../controllers/member');


router
    .route('/members')
    .get(ctrlMember.getMembers)
    .post(ctrlMember.createMember);

router
    .route('/members/:memberid')
    .get(ctrlMember.getSingleMember)
    .put(ctrlMember.updateMember)
    .delete(ctrlMember.deleteMember);


router
    .route('/projects')
    .get(ctrlProject.getProjects)
    .post(ctrlProject.createProject);

router
    .route('/projects/:projectid')
    .get(ctrlProject.getSingleProject)
    .put(ctrlProject.updateProject)
    .delete(ctrlProject.deleteProject);

module.exports = router;