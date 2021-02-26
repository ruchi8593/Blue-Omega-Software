const response = require('express');
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

const _renderCreatePage = function (req, res) {
    res.render('listmembers', {
        title: "Create new Member"
    });
};

const addNewMember = function (req, res) {
    _renderCreatePage(req, res);
};

const doAddNewMember = function (req, res) {

    const path = '/api/members';
    const postdata = {
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
    res.render('home', { Members: responseBody, title: 'Blue Omega Software Solutions' });
};

const _renderMemberListPage = function (req, res, responseBody) {
    res.render('listmembers', { Members: responseBody });
};

const _renderDetailPage = function (req, res, responseBody) {
    res.render('detail', { currentMember: responseBody });
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

const MemberDetail = function (req, res) {
    const path = `/api/Members/${req.params.Memberid}`;
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
    MembersList,
    MemberDetail,
    doAddNewMember,
    addNewMember,
    showMembers
};