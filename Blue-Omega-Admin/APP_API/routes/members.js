const express = require('express');
const router = express.Router();
const ctrlMember = require('../controllers/member')


router
    .route('/members')
    .get(ctrlMember.getMembers)
    .post(ctrlMember.createMember);

router
    .route('/members/:memberid')
    .get(ctrlMember.getSingleMember)
    .put(ctrlMember.updateMember)
    .delete(ctrlMember.deleteMember);

module.exports = router;