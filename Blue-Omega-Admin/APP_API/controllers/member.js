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

const createMember = function (req, res) {
    Member
        .create({
            fname: req.body.fname,
            lname: req.body.lname,
            employee_image: req.body.employee_image,
            gender: req.body.gender,
            email: req.body.email,
            phone: req.body.phone,
            platform: req.body.platform,
            technology: req.body.technology,
            employee_id: req.body.employee_id,
            position: req.body.position,
            experience: req.body.experience,
            joiningyear: req.body.joiningyear
        },
            (err, memberdata) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                }
                else {
                    res
                        .status(201)
                        .json(memberdata);
                }
            });
};

const getSingleMember = function (req, res) {

    if (req.params && req.params.memberid) {
        Member
            .findById(req.params.memberid)
            .exec(function (err, memberdata) {
                if (!memberdata) {
                    res
                        .status(404)
                        .json({ "message": "memberid Not Found" });
                    return;
                }
                else if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(200)
                    .json(memberdata);
            });
    }

};


const updateMember = function (req, res) {

    if (!req.params.memberid) {
        res
            .status(404)
            .json({ "message": "No memberid is passed!" });
        return;

    };
    Member
        .findById(req.params.memberid)
        .exec((err, memberdata) => {
            if (!memberdata) {
                res
                    .status(404)
                    .json({ "message": "This memberid is not found" });
                return;
            }
            else if (err) {
                res
                    .status(404)
                    .json(err);
                return;
            }
            memberdata.fname = req.body.fname,
                memberdata.lname = req.body.lname,
                memberdata.employee_image = req.body.employee_image,
                memberdata.gender = req.body.gender,
                memberdata.email = req.body.email,
                memberdata.phone = req.body.phone,
                memberdata.platform = req.body.platform,
                memberdata.technology = req.body.technology,
                memberdata.employee_id = req.body.employee_id,
                memberdata.position = req.body.position,
                memberdata.experience = req.body.experience,
                memberdata.joiningyear = req.body.joiningyear

            memberdata.save((err, memberdata) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                else {
                    res
                        .status(200)
                        .json(memberdata);
                }
            });
        });
};

const deleteMember = function (req, res) {
    const memberid = req.params.memberid;
    if (memberid) {
        Member
            .findByIdAndRemove(memberid)
            .exec((err, memberdata) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(204)
                    .json({ "message": "The data was successfully deleted!" });
            });
    }
    else {
        res
            .status(404)
            .json({ "message": "No memberid" });
    }
};

module.exports = {
    getMembers, createMember, getSingleMember, updateMember,
    deleteMember
};