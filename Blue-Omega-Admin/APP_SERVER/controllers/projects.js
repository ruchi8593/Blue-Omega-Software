const response = require('express');
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

const _renderCreatePage = function (req, res) {
    res.render('listprojects', {
        title: "Create new project"
    });
};

const addNewProject = function (req, res) {
    _renderCreatePage(req, res);
};

const doAddNewProject = function (req, res) {

    const path = '/api/projects';
    const postdata = {
        name: req.body.name,
        image: req.body.image,
        platform: req.body.platform,
        technology: req.body.technology,
        developer: req.body.developer,
        status: req.body.status,
        version: req.body.version,
        releaseyear: req.body.releaseyear
    };

    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,
        (err, response, body) => {
            if (response.statusCode === 201) {
                res.redirect('/');
            }
        });

};


const _renderHomePage = function (req, res, responseBody) {
    res.render('home', { Projects: responseBody, title: 'Blue Omega Software Solutions' });
};

const _renderProjectListPage = function (req, res, responseBody) {
    res.render('listprojects', { Projects: responseBody });
};

const _renderDetailPage = function (req, res, responseBody) {
    res.render('detail', { currentProject: responseBody });
};


const ProjectsList = function (req, res) {
    const path = '/api/projects';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(requestOptions, (err, response, body) => {
        _renderHomePage(req, res, body);

    });
};

const showProjects = function (req, res) {

    const path = '/api/projects';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(requestOptions, (err, response, body) => {
        _renderProjectListPage(req, res, body);

    });
};

const ProjectDetail = function (req, res) {
    const path = `/api/projects/${req.params.projectid}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };

    request(requestOptions, (err, response, body) => {
        _renderDetailPage(req, res, body);

    });
};

module.exports = {
    ProjectsList,
    ProjectDetail,
    doAddNewProject,
    addNewProject,
    showProjects
};