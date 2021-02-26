const express = require('express');
const router = express.Router();

const ctrlProject = require('../controllers/projects');
const ctrlMember = require('../controllers/members');

/* GET home page. */
router.get('/', ctrlProject.showProjects);
router.get('/members', ctrlMember.showMembers);
router.get('/projects/:projectid', ctrlProject.ProjectDetail);
router.get('/members/:memberid', ctrlMember.MemberDetail);

router.route('/')
    .get(ctrlProject.addNewProject)
    .post(ctrlProject.doAddNewProject);

router.route('/members')
    .get(ctrlMember.addNewMember)
    .post(ctrlMember.doAddNewMember);

module.exports = router;