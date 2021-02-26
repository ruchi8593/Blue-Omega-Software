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

const createProject = function (req, res) {
    Project
        .create({
            name: req.body.name,
            image: req.body.image,
            platform: req.body.platform,
            technology: req.body.technology,
            developer: req.body.developer,
            status: req.body.status,
            version: req.body.version,
            releaseyear: req.body.releaseyear
        },
            (err, projectdata) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                }
                else {
                    res
                        .status(201)
                        .json(projectdata);
                }
            });
};

const getSingleProject = function (req, res) {

    if (req.params && req.params.projectid) {
        Project
            .findById(req.params.projectid)
            .exec(function (err, projectdata) {
                if (!projectdata) {
                    res
                        .status(404)
                        .json({ "message": "projectid Not Found" });
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
                    .json(projectdata);
            });
    }

};


const updateProject = function (req, res) {

    if (!req.params.projectid) {
        res
            .status(404)
            .json({ "message": "No projectid is passed!" });
        return;

    };
    Project
        .findById(req.params.projectid)
        .exec((err, projectdata) => {
            if (!projectdata) {
                res
                    .status(404)
                    .json({ "message": "This projectid is not found" });
                return;
            }
            else if (err) {
                res
                    .status(404)
                    .json(err);
                return;
            }
            projectdata.name = req.body.name,
                projectdata.image = req.body.image,
                projectdata.platform = req.body.platform,
                projectdata.technology = req.body.technology,
                projectdata.developer = req.body.developer,
                projectdata.status = req.body.status,
                projectdata.version = req.body.version,
                projectdata.releaseyear = req.body.releaseyear

            projectdata.save((err, projectdata) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                else {
                    res
                        .status(200)
                        .json(projectdata);
                }
            });
        });
};

const deleteProject = function (req, res) {
    const projectid = req.params.projectid;
    if (projectid) {
        Project
            .findByIdAndRemove(projectid)
            .exec((err, projectdata) => {
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
            .json({ "message": "No projectid" });
    }
};

module.exports = {
    getProjects, createProject, getSingleProject, updateProject,
    deleteProject
};