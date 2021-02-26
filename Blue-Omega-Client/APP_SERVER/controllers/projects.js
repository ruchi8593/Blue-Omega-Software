const response = require('express');
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

const _renderHomePage = function (req, res, responseBody) {
    res.render('home', { Projects: responseBody, title: 'Blue Omega Software Solutions' });
};

const _renderProjectListPage = function (req, res, responseBody) {
    res.render('listprojects', { Projects: responseBody });
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

module.exports = {
    ProjectsList,
    showProjects,
    _renderHomePage
};