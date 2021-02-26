const mongoose = require('mongoose');
const Project = mongoose.model('project');

const getProjects = function (req, res) {
    Project.find()
        .exec(function (err, projectdata) {

            if (err) {
                res
                    .status(404)
                    .json(err);
                return;
            }
            res
                .status(200)
                .json(projectdata);
        });

};


module.exports = {
    getProjects
};