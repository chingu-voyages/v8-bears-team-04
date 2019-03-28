const path = require('path');
const express = require('express');

exports.commonalities = [
    express.static(path.join(__dirname, 'client/build')),
    express.json(),
    express.urlencoded({extended: false}),
];