const mongoose = require('mongoose');
const Member = mongoose.model('member');

const getMembers = function (req, res) {
    Member.find()
        .exec(function (err, memberdata) {
            if (err) {
                res
                    .status(404)
                    .json(err);
                return;
            }
            res
                .status(200)
                .json(memberdata);
        });

};

module.exports = {
    getMembers
};