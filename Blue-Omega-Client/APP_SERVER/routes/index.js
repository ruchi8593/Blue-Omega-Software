const express = require('express');
const router = express.Router();

const ctrlProject = require('../controllers/projects');
const ctrlMember = require('../controllers/members');
const ctrlAbout = require('../controllers/about');

/* GET home page. */
router.get('/', ctrlProject._renderHomePage);
router.get('/projects', ctrlProject.showProjects);
router.get('/members', ctrlMember.showMembers);
router.get('/about', ctrlAbout.about);

module.exports = router;