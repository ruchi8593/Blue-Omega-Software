const response = require('express');
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};


const _renderHomePage = function (req, res, responseBody) {
    res.render('home', { Members: responseBody, title: 'Blue Omega Software Solutions' });
};

const _renderMemberListPage = function (req, res, responseBody) {
    res.render('listmembers', { Members: responseBody });
};


const MembersList = function (req, res) {
    const path = '/api/Members';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(requestOptions, (err, response, body) => {
        _renderHomePage(req, res, body);

    });
};

const showMembers = function (req, res) {

    const path = '/api/Members';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(requestOptions, (err, response, body) => {
        _renderMemberListPage(req, res, body);

    });
};

module.exports = {
    MembersList,
    showMembers,
    _renderHomePage
};